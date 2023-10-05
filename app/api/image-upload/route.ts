import { client } from "@/utils/sanity/client"
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: Request) {
    const {name,image}: any = await request.json()
//    const image = data.get("image")
    console.log(image,name)
    //    const res = await client.assets
    //     .upload("image", file, {
    //       contentType: file.type,
    //       filename: file.name,
    //     })
    //    console.log(res)
    return Response.json("Hi")
}