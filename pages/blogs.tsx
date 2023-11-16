import Link from "next/link";
import groq from "groq";
import { sanityClient } from "../sanity";
import { Posts } from "../typings";
import PostCard from "../components/PostCard";
import Sidebar from "../components/dashboard/Sidebar";
import Progress from "../components/dashboard/Progress";
import { useSession } from "next-auth/react";
interface Props {
  posts: Posts[];
}

const Index = ({ posts }: Props) => {
  const { data: session } = useSession();
  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  // @ts-ignore
  const formattedDate = today.toLocaleDateString("en-US", options);
  console.log(posts.map((post) => post));
  return (
    <div className="grid h-screen  grid-cols-12 bg-[#f4f1eb]/50">
      <Sidebar />
      <div className="container overflow-y-hidden mx-auto col-span-9  py-8 ">
        {/* <FeaturedPosts /> */}
        <div className="flex px-5  justify-between items-center">
          <div className="flex gap-4 font-bold text-lg">
            <img
              className="h-8 w-8 object-cover  rounded-full"
              src={session?.user?.image || ""}
            />
            <p>Hi {session?.user?.name}, welcome Back!</p>
          </div>
          <div className="items-center flex gap-5">
            <p className="text-sm font-semibold text-black/50">
              {formattedDate}
            </p>
            <div className="bg-black/5 p-2 text-black/80 cursor-pointer hover:text-black hover:bg-black/30 transition-all duration-150  rounded-lg">
              <p>Add New Goal</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-20 lg:grid-cols-12 overflow-y-scroll h-screen bg-white/70 rounded-lg p-5 gap-12">
          <div className="lg:col-span-8 flex flex-col-reverse col-span-1">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              {/* <PostWidget /> */}
              {/* <Categories /> */}
              <Link href={`/blogpost`}>
                <button className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                  Post A Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Progress />
    </div>
  );
};

export async function getStaticProps() {
  const posts = await sanityClient.fetch(groq`
  *[_type == "post"] {
    ...,
    author[]->{
      ...,
    },      
    category[]->{
    ...,
  }
  }  | order(_createdAt asc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
