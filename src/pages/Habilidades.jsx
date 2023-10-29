import ContainerLanguage from "../components/ContainerLaguage";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoJava,
  BiLogoPython,
  BiLogoFirebase,
  BiLogoGithub,
} from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { BsKanbanFill, BsGit } from "react-icons/bs";

const Skill = () => {
  return (
    <div>
      <h2 className="title">Habilidades</h2>
      <div className="containersLanguages">
        <ContainerLanguage
          languages={[
            { nome: "JavaScript", img: <BiLogoJavascript /> },
            { nome: "ReactJs", img: <BiLogoReact /> },
            { nome: "HTML5", img: <BiLogoHtml5 /> },
            { nome: "CSS", img: <BiLogoCss3 /> },
            { nome: "NodeJs", img: <BiLogoNodejs /> },
            { nome: "Java", img: <BiLogoJava /> },
            { nome: "Python", img: <BiLogoPython /> },
            { nome: "ExpressJs", img: <BiLogoJavascript /> },
            { nome: "Firebase", img: <BiLogoFirebase /> },
            { nome: "MySQL", img: <SiMysql /> },
            { nome: "Scrum", img: <DiScrum /> },
            { nome: "KANBAN", img: <BsKanbanFill /> },
            { nome: "Git", img: <BsGit /> },
            { nome: "Github", img: <BiLogoGithub /> },
          ]}
        />
      </div>
    </div>
  );
};

export default Skill;
