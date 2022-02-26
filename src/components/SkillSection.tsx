import {FE_SKILL_LIST, DEV_TOOL_LIST, WORK_TOOL_LIST} from "@constants/."
import { SkillCard } from "./SkillCard"

export const SkillSection = () => {

  return (
    <section>
      <SkillCard title="Front-end" itemSet={FE_SKILL_LIST}/>
      <SkillCard title="Dev tools" itemSet={DEV_TOOL_LIST}/>
      <SkillCard title="Work tools" itemSet={WORK_TOOL_LIST}/>
    </section>
  )
}