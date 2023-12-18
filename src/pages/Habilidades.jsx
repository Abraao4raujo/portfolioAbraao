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
import { SiMysql, SiMongodb, SiFigma, SiDocker } from "react-icons/si";
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
            { nome: "NodeJs", img: <BiLogoNodejs /> },
            { nome: "ReactJs", img: <BiLogoReact /> },
            { nome: "Docker", img: <SiDocker />},
            { nome: "Java", img: <BiLogoJava /> },
            { nome: "Python", img: <BiLogoPython /> },
            { nome: "HTML5", img: <BiLogoHtml5 /> },
            { nome: "CSS", img: <BiLogoCss3 /> },
            { nome: "Firebase", img: <BiLogoFirebase /> },
            { nome: "MySQL", img: <SiMysql /> },
            { nome: "MongoDB", img: <SiMongodb />},
            { nome: "Scrum", img: <DiScrum /> },
            { nome: "Kanban", img: <BsKanbanFill /> },
            { nome: "Git", img: <BsGit /> },
            { nome: "Github", img: <BiLogoGithub /> },
            { nome: "Figma", img: <SiFigma />},
          ]}
        />
      </div>
    </div>
  );
};

export default Skill;
