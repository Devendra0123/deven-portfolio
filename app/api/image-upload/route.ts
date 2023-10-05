import { client } from "@/utils/sanity/client"
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(request: Request) {
    const {file} = await request.json()
   
    console.log(file)
    //    const res = await client.assets
    //     .upload("image", file, {
    //       contentType: file.type,
    //       filename: file.name,
    //     })
    //    console.log(res)
    return Response.json("Hi")
}