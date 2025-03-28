import { getProjects, getSkills, getWritings } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";
import SkillsComp from "../components/SkillsComp";

// Force server-side rendering and disable caching
export const dynamic = 'force-dynamic';

const Home = async () => {

  const projects = await getProjects();
  const writings = await getWritings();
  // reversed to put Next.js on the top
  // TODO: find better solution to show in priority
  const skills = (await getSkills()).reverse();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello! <span className=" bg-gradient-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">I&apos;m Shreyas </span>
      </h1>

      <p className="mt-10 text-xl text-gray-600">I write code, think about products and create digital solutions</p>
      {/* <p className="mt-1 text-xl text-gray-600">Currently Fullstack Developer at <a href="https://roboto.studio/" target="_blank" className="underline ">Roboto Studio</a></p> */}
      
      {/* skills */}
      <SkillsComp skillsList={skills} />

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8">
        {
          projects.map((project) => {
            return (
              <Link
                key={project._id}
                href={`/projects/${project.slug}`}
                className="border-2 border-gray-200 rounded-lg p-1 hover:scale-105 hover:border-orange-200 transition"
              >
                {
                  project.image && (
                    <Image
                      src={project.image}
                      alt={project.alt ?? "project image"}
                      width={450}
                      height={80}
                      className=" max-h-[150px] object-cover rounded-lg border border-gray-200 "
                    />
                  )
                }
                <div className="px-2 py-2">
                  <div className="mt-2 text-base font-extrabold bg-gradient-to-r from-orange-200 via-red-500 to-purple-700 bg-clip-text text-transparent">
                    {project.name}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">{project.overview}</p>
                </div>
              </Link>
            )
          })
        }
      </div>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My writings</h2>
      <div className="mt-5 flex flex-col gap-2">
        {
          writings.map(writing => (
            <p key={writing._id}> <a href={writing.url} className="border-b border-orange-200 text-base" target="_blank">{writing.name}</a></p>
          ))
        }
      </div>
    </div>
  )
}

export default Home;