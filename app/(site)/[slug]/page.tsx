import SanityComp from "@/app/components/SanityComp"
import { getSinglePage } from "@/sanity/sanity-utils"
import {PortableText} from "@portabletext/react"

type Props = {
    params: {slug: string}
}

export default async function Page({params}:Props) {
    const page = await getSinglePage(params.slug)
    return(
        <div className="">
            <h1 className="bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 bg-clip-text text-transparent text-5xl leading-snug drop-shadow font-extrabold">{page.title}</h1>
            
            <div className="prose lg:prose-xl mt-10">
            <PortableText value={page.content} components={SanityComp} />
            </div>
        </div>
    )
}