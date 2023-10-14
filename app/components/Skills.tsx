import { Skill } from "@/types/Skill";
import Image from "next/image";

function Skills({skillItems}: Skill) {
    return (
        <div className="mt-6 flex flex-wrap gap-3 max-w-5xl">
        {
          skillItems.map((skill: Skill) => (
            <p key={skill._id} className="flex py-2 text-gray-500 px-6 border rounded-full gap-2 text-xs items-center">
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

export default Skills;