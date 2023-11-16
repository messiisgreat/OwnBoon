import type {NextApiRequest, NextApiResponse} from "next"
import {groq } from "next-sanity"; 
import {sanityClient } from "../../sanity";
import { User } from "../../typings";


const query = groq`
*[_type == "user"] {
  ...,
}  | order(_createdAt asc)
`

type Data = {
   user: User[]
}


export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
 ) {

   const user: User[] = await sanityClient.fetch(query)
   res.status(200).json({ user})
 }
 