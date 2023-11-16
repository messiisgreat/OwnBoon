import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2023-01-29",

    useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

