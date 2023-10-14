import SkillsComp from "@/app/components/SkillsComp";
import { getSingleProject, getSkills } from "@/sanity/sanity-utils";
import { Skill } from "@/types/Skill";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props) {

    const slug = params.project;
    const project = await getSingleProject(slug);

    const skills = await getSkills();
    const filteredSkills: any = []

    // filter skills
    skills.map((skill: Skill) => {
        if (skill?.project) {
            skill?.project.map((item: any) => {
                if (item.slug == slug) {
                    filteredSkills.push(skill)
                }
            })
        }
    })

    return (
        <>
            <div>
                <header className="flex justify-between items-start md:items-center flex-col md:flex-row">
                    <h1 className="bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 bg-clip-text text-transparent text-5xl leading-snug drop-shadow font-extrabold">{project.name}</h1>

                    <div className="flex gap-2 items-center mt-3">
                        <a href={project.url}
                            title="View project"
                            target="_blank"
                            className="bg-gray-100 rounded-lg text-xs text-gray-500 font-semibold py-3 px-4 whitespace-nowrap hover:bg-orange-500 hover:text-white transition"
                            rel="noopener norefferrer"
                        >
                            View project
                        </a>
                        {
                            project.github
                                ?
                                <a href={project.github}
                                    title="View project"
                                    target="_blank"
                                    className="bg-gray-100 rounded-lg text-xs text-gray-500 font-semibold py-3 px-4 whitespace-nowrap hover:bg-black hover:text-white transition"
                                    rel="noopener norefferrer"
                                >
                                    {`</>`}
                                </a>
                                :
                                <></>
                        }
                    </div>
                </header>

                {/* overview */}
                <div className="mt-8 text-lg text-gray-700 max-w-lg">
                    {project.overview}
                </div>

                {/* skills ist */}
                <SkillsComp skillsList={filteredSkills} />

                {/* images */}
                <Image
                    src={project.image}
                    alt={project.alt}
                    width={1920}
                    height={1080}
                    className="mt-10 object-cover rounded-lg border border-gray-200 "
                />

                {/* content */}
                <div className="mt-5 text-lg text-gray-700 prose lg:prose-xl">
                    <PortableText value={project.content} />
                </div>
            </div>
        </>
    )
}