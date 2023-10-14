import { Skill } from "@/types/Skill"
import Image from "next/image"

const SkillsComp = ({skillsList}: any) => {
  return (
    <div className="mt-6 py-2 flex overflow-x-scroll md:overflow-auto md:flex-wrap gap-3 md:max-w-3xl">
        {
          skillsList.map((skill: Skill) => (
            <p key={skill._id} className="flex py-2 text-gray-500 px-6 border rounded-full gap-2 text-xs items-center justify-center">
              <Image 
                src={skill.image} 
                alt={skill.alt} 
                width={16} 
                height={16}
              />
              {skill.name}
            </p>
          ))
        }
      </div>
  )
}

export default SkillsComp