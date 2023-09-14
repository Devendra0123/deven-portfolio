import { BsFileArrowUp, BsFileArrowDown,BsFileImage,BsSpeedometer2,BsCode,BsTag } from "react-icons/bs"
import {HiOutlineServer} from 'react-icons/hi'
import {DiResponsive} from "react-icons/di"
import {LiaSitemapSolid} from "react-icons/lia"
import {GrInsecure} from "react-icons/gr"
import {BiUser} from "react-icons/bi"

export const seoPoints = [
    {
        title: "faster loading times",
        icon: <BsSpeedometer2 />
    },
    {
        title: "server-side rendering",
        icon: <HiOutlineServer />
    },
    {
        title: "Compress images",
        icon: <BsFileImage />
    },
    {
        title: "responsive design",
        icon: <DiResponsive />
    },
    {
        title: "semantic tags",
        icon: <BsCode />
    },
    {
        title: "sitemaps",
        icon: <LiaSitemapSolid />
    },
    {
        title: "Meta tags",
        icon: <BsTag />
    },
    {
        title: "HTTPS",
        icon: <GrInsecure />
    },
    {
        title: "User Experience ",
        icon: <BiUser />
    },
]