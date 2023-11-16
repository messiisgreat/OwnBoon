import Link from "next/link";
import groq from "groq";
import { sanityClient } from "../sanity";
import { Posts, User } from "../typings";
import PostCard from "../components/PostCard";
import Sidebar from "../components/dashboard/Sidebar";
import Progress from "../components/dashboard/Progress";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { fetchUsers } from "../utils/fetchUsers";
import createSlug from "@sindresorhus/slugify";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });
interface Props {
  posts: Posts[];
  users: User[];
}

interface Slug {
  slug: {
    current: string;
  };
}

const Home = ({ posts, users }: Props, { slug }: Slug) => {
  const { data: session } = useSession();
  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  // @ts-ignore
  const formattedDate = today.toLocaleDateString("en-US", options);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const match = users.find((user) => user.name === session?.user?.name);
    const author = [{ _type: "reference", _ref: match!._id }];
    const mutations = {
      _type: "post",
      title: title,
      author: author,
      mainImage: image,
      body: body,
    };
    const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

    const result = await fetch(`/api/addBlog`, {
      body: JSON.stringify(mutations),
      method: "POST",
    });

    const json = await result.json();
    setTitle("");
    setImage("");
    setBody("");
    setCategory("");
    return json;
  };
  return (
    <div className="grid grid-cols-12 bg-[#f4f1eb]/50">
      <Sidebar />
      <div className="container mx-auto col-span-9  py-8 ">
        {/* <Header /> */}
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
          {/* Main */}
        </div>
        <div
          className="flex flex-col
          "
          onSubmit={handleSubmit}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="image">Main Image URL</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="body">Body</label>
          <ReactQuill
            theme="snow"
            className="h-96 bg-white"
            value={body}
            onChange={setBody}
          />
          <label className="mt-20" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </div>
      <Progress />
    </div>
  );
};

export default Home;
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

  const users: User[] = await fetchUsers();

  return {
    props: {
      posts,
      users,
    },
  };
}
