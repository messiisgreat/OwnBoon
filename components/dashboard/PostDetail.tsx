import { PortableText } from "@portabletext/react";
import React from "react";
import { Posts } from "../../typings";

interface Props {
  post: Posts;
}

const PostDetail = ({ post }: Props) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg col-span-9 lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.mainImage}
            alt=""
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              {/* <img
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.map((author) => author.name) || ""}
              /> */}
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                {post.author.map((author) => author.name)}
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">{post._createdAt}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>

          {/* @ts-ignore */}
          <div
            className="blog"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </div>
    </>
  );
};

export default PostDetail;
