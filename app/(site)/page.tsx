import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

const Home = async () => {

  const projects = await getProjects();
  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello! <span className=" bg-gradient-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">I&apos;m Shreyas </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">Moshi mosh!</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8">
      {
        projects.map((project) => {
          return(
            <Link
              key={project._id} 
              href={`/projects/${project.slug}`} 
              className="border-2 border-gray-200 rounded-lg p-1 hover:scale-105 hover:border-orange-200 transition"
            >
              {
                project.image && (
                  <Image
                  src={project.image}
                  alt={project.alt}
                  width={750}
                  height={500}
                  className=" object-cover rounded-lg border border-gray-200 "
                  />
                  )
                }
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-200 via-red-500 to-purple-700 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          )
        })
      }
      </div>
    </div>
  )
}

export default Home;