import { getSingleProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props) {

    const slug = params.project;
    const project = await getSingleProject(slug);

    return (
        <>
            <div>
                <header className="flex justify-between items-center">
                    <h1 className="bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 bg-clip-text text-transparent text-5xl leading-snug drop-shadow font-extrabold">{project.name}</h1>
                    <a href={project.url}
                        title="View project"
                        target="_blank"
                        className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-orange-500 hover:text-white transition"
                        rel="noopener norefferrer"
                    >
                        View project
                    </a>
                </header>

                {/* content */}
                <div className="mt-5 text-lg text-gray-700 ">
                    <PortableText value={project.content} />
                </div>

                {/* images */}
                <Image
                    src={project.image}
                    alt={project.alt}
                    width={1920}
                    height={1080}
                    className="mt-10 object-cover rounded-lg border border-gray-200 "
                />
            </div>
        </>
    )
}