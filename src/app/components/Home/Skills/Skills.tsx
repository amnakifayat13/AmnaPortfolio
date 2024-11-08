import SectionHeading from "../sectionHeading"
import {skillsData} from "../../../Data/data"
import SkillsCard from "./SkillsCard"
export default function Skills(){
    return (
        <div className="pt-16 pb-16 bg-black">
            <SectionHeading>Skills</SectionHeading>
            <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5
            gap-4 items-center">
                {skillsData.map((skill) =>{
                    return<div 
                    key={skill.id}>
                        <SkillsCard skill={skill}/>
                    </div>
                })}
            </div>

        </div>
    )
}