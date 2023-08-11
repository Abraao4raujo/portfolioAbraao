import "./main.css";
import { Skill } from "./components/Skills";
import { ExperienceCard } from "./components/ExperienceCard";
import PortfolioSection from './components/Portfolio';
import ContactSection from './components/ContactSection';

const Main = () => {
  return (
    <>
      <main className="container-main">
        <div className="parte-sobre">
          <div className="sobre">
            <h1>Sobre</h1>
            <span className="reta"></span>
            <p>
              Eu tenho 18 anos e moro em Maceió. Em 2021, comecei a estudar
              programação porque sempre tive curiosidade sobre como funcionam os
              programas e sites. Foi nesse momento que percebi que queria me
              tornar um programador.
            </p>
          </div>
        </div>
        <div className="habilidades js-scroll">
          <div className="parte-habilidades">
            <h1>Hard Skills</h1>
            <div className="reta"></div>
            <div className="skills-container">
              <div className="skills-column">
                <Skill name="JavaScript" progress={100} />
                <Skill name="Scrum" progress={100} />
                <Skill name="NodeJs" progress={95} />
                <Skill name="ReactJs" progress={95} />
                <Skill name="Firebase" progress={95} />
                <Skill name="Git" progress={95} />
                <Skill name="GitHub" progress={95} />
                <Skill name="Inglês" progress={75} />
              </div>
              <div className="skills-column">
                <Skill name="HTML" progress={100} />
                <Skill name="CSS" progress={100} />
                <Skill name="Kanban" progress={93} />
                <Skill name="Express.js" progress={85} />
                <Skill name="Python" progress={70} />
                <Skill name="MySql" progress={70} />
              </div>
            </div>
          </div>

          <div className="parte-habilidades">
            <h1>Soft Skills</h1>
            <div className="reta"></div>
            <div className="skills-container">
              <div className="skills-column">
                <Skill name="Comunicação" progress={80} />
                <Skill name="Trabalho em Equipe e Colaboração" progress={95} />
                <Skill name="Resolução de problemas" progress={85} />
              </div>
              <div className="skills-column">
                <Skill name="Adaptabilidade/Flexibilidade" progress={100} />
                <Skill name="Atendimento ao Cliente" progress={100} />
              </div>
            </div>
          </div>
        </div>

        <ExperienceCard
          title="Escolaridade"
          currentStatus="Ensino Superior - EM ANDAMENTO"
          description="Estudante de Ciências da Computação"
          year="2023"
        />
        <ExperienceCard
          title="Escolaridade"
          currentStatus="Curso de Inglês - EM ANDAMENTO"
          description="Estudante de inglês"
          year="2019"
        />
        <ExperienceCard
          title="Trabalhos"
          currentStatus="Softcom"
          description="Suporte na área interna e externa"
        />

      <PortfolioSection/>

        <ContactSection />
      </main>
    </>
  );
};

export default Main;
