import "./main.css";
import { Skill } from "./components/Skills";
import { ExperienceCard } from "./components/ExperienceCard";
import PortfolioSection from "./components/Portfolio";
import ContactSection from "./components/ContactSection";

const Main = () => {
  return (
    <>
      <main className="container-main">
        <div className="parte-sobre">
          <div className="sobre">
            <h1>Sobre</h1>
            <span className="reta"></span>
            <p>
              🚀 Forte interesse em desenvolvimento web e sou apaixonado por
              tecnologias como React.js, Node.js.
            </p>
            <p>
              👨‍💻Sempre buscando formas de melhorar minhas habilidades e
              aplicá-las em projetos criativos e desafiadores.
            </p>
          </div>
        </div>
        <div className="habilidades js-scroll">
          <div className="parte-habilidades">
            <h1>Hard Skills</h1>
            <div className="reta"></div>
            <div className="skills-container">
              <div className="skills-column">
                <Skill name="JavaScript" image="./img/javascriptIcon.png" />
                <Skill name="Scrum" image="./img/scrumIcon.png" />
                <Skill name="NodeJs" image="./img/nodejsIcon.png" />
                <Skill name="ReactJs" image="./img/reactIcon.png" />
                <Skill name="Java" image="./img/javaIcon.png" />
                <Skill name="Firebase" image={"./img/firebaseIcon.png"} />
                <Skill name="Git" image={"./img/gitIcon.png"} />
                <Skill name="GitHub" image={"./img/githubIcon.png"} />
                <Skill name="Inglês" image={"./img/yesidiomaIcon.png"} />
              </div>
              <div className="skills-column">
                <Skill name="HTML" image={"./img/htmlIcon.png"} />
                <Skill name="CSS" image={"./img/cssIcon.png"} />
                <Skill name="Kanban" image={"./img/kanbanIcon.png"} />
                <Skill name="Express.js" image={"./img/expressjsIcon.png"} />
                <Skill name="Python" image={"./img/pythonIcon.png"} />
                <Skill name="MySql" image={"./img/mysqlIcon.png"} />
              </div>
            </div>
          </div>

          <div className="parte-habilidades">
            <h1>Soft Skills</h1>
            <div className="reta"></div>
            <div className="skills-container">
              <div className="skills-column">
                <Skill name="Atendimento ao Cliente" />
                <Skill name="Trabalho em Equipe e Colaboração" />
                <Skill name="Resolução de problemas" />
              </div>
              <div className="skills-column">
                <Skill name="Flexibilidade" />
                <Skill name="Comunicação" />
              </div>
            </div>
          </div>
        </div>

        <ExperienceCard
          title="🎓 Escolaridade"
          currentStatus="Ensino Superior - EM ANDAMENTO"
          description="Cursando Ciências da Computação na UNINASSAU."
          year="2023"
        />
        <ExperienceCard
          title="📚Educaçäo"
          currentStatus="Curso de Inglês - EM ANDAMENTO"
          description="Estudante de inglês"
          year="2019"
        />
        <ExperienceCard
          title="💼Trabalhos"
          currentStatus="Softcom"
          description="Trabalhei como Suporte Técnico com forte ênfase na resolução de
              problemas e comunicação."
        />

        <PortfolioSection />

        <ContactSection />
      </main>
    </>
  );
};

export default Main;
