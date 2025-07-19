import { BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoJava, BiLogoPython, BiLogoFirebase, BiLogoGithub } from "react-icons/bi";
import { SiMysql, SiMongodb, SiFigma, SiDocker, SiPostgresql, SiPhp, SiRedis, SiTypescript, SiCanva, SiTailwindcss, SiBootstrap, SiNextdotjs, SiC } from "react-icons/si";
import { DiPhotoshop, DiScrum } from "react-icons/di";
import { BsKanbanFill, BsGit } from "react-icons/bs";
import { FaLinux, FaVuejs } from "react-icons/fa";
import "../styles/Habilidades.css";

const Habilidades = () => {
  const categorias = [
    {
      titulo: "Tecnologias",
      skills: [
        { nome: "JavaScript", img: <BiLogoJavascript /> },
        { nome: "TypeScript", img: <SiTypescript /> },
        { nome: "Node.js", img: <BiLogoNodejs /> },
        { nome: "React.js", img: <BiLogoReact /> },
        { nome: "Next.js", img: <SiNextdotjs /> },
        { nome: "React Native", img: <BiLogoReact /> },
        { nome: "Vue.js", img: <FaVuejs /> },
        { nome: "Tailwind CSS", img: <SiTailwindcss /> },
        { nome: "Bootstrap", img: <SiBootstrap /> },
        { nome: "PHP", img: <SiPhp /> },
        { nome: "C", img: <SiC /> },
        { nome: "Java", img: <BiLogoJava /> },
        { nome: "Python", img: <BiLogoPython /> },
      ],
    },
    {
      titulo: "Banco de Dados",
      skills: [
        { nome: "MySQL", img: <SiMysql /> },
        { nome: "SQL", img: <SiMysql /> },
        { nome: "MongoDB", img: <SiMongodb /> },
        { nome: "PostgreSQL", img: <SiPostgresql /> },
        { nome: "Firebase", img: <BiLogoFirebase /> },
      ],
    },
    {
      titulo: "Ferramentas",
      skills: [
        { nome: "Git", img: <BsGit /> },
        { nome: "GitHub", img: <BiLogoGithub /> },
        { nome: "Docker", img: <SiDocker /> },
        { nome: "WSL", img: <FaLinux /> },
        { nome: "Redis", img: <SiRedis /> },
      ],
    },
    {
      titulo: "Metodologias",
      skills: [
        { nome: "Kanban", img: <BsKanbanFill /> },
        { nome: "Scrum", img: <DiScrum /> },
      ],
    },
    {
      titulo: "Design",
      skills: [
        { nome: "Figma", img: <SiFigma /> },
        { nome: "Photoshop", img: <DiPhotoshop /> },
        { nome: "Canva", img: <SiCanva /> },
      ],
    },
  ];

  return (
    <section className="habilidades">
      <div className="habilidades-container">
        <h2 className="habilidades-titulo">Minhas Habilidades Técnicas</h2>
        {categorias.map(({ titulo, skills }, idx) => (
          <div key={idx} className="habilidades-categoria">
            <h3 className="categoria-titulo">{titulo}</h3>
            <div className="habilidades-grid">
              {skills.map((skill, i) => (
                <div className="skill-card" key={i}>
                  <div className="skill-icon">{skill.img}</div>
                  <span className="skill-nome">{skill.nome}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
