// [slug].tsx

import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "../../sanity";
import { Category, Posts } from "../../typings";
import PostDetail from "../../components/dashboard/PostDetail";
import Sidebar from "../../components/dashboard/Sidebar";
import Progress from "../../components/dashboard/Progress";

interface Props {
  post: Posts;
}

function urlFor(source: any) {
  return imageUrlBuilder(sanityClient).image(source);
}

// const ptComponents = {
//   types: {
//     image: ({ value }) => {
//       if (!value?.asset?._ref) {
//         return null;
//       }
//       return (
//         <img
//           alt={value.alt || " "}
//           loading="lazy"
//           src={urlFor(value).width(320).height(240).fit("max").auto("format")}
//         />
//       );
//     },
//   },
// };

const Post = ({ post }: Props) => {
  console.log(post);
  return (
    <>
      {/* <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">cum</div>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-12 bg-[#f4f1eb]/50">
        <Sidebar />
        <PostDetail post={post} />
        <Progress />
      </div>
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
    author[]->{
      ...,
    },      
    category[]->{
    ...,
  }

}`;
export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await sanityClient.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
