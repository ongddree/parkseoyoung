import { NextPage } from "next";
import { SkillSection } from "../components/SkillSection";
import { StrengthSection } from "@src/components/StrengthSection";

const Testpage:NextPage = () => {
  return(
    <>
      <SkillSection></SkillSection>
      <StrengthSection></StrengthSection>
    </>
  );
}

export default Testpage;