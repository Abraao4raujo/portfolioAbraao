import PortfolioItem from "../components/PortfolioItem";
import "../styles/Projetos.css";

const Projetos = () => {
  return (
    <section className="projetos">
      <div className="projetos-container">
        <h2 className="projetos-titulo">Projetos em Destaque</h2>
        <p className="projetos-subtitulo">Aplicações que desenvolvi com foco em performance e propósito.</p>
        <div className="projetos-grid">
          <PortfolioItem
            name="Lista de Jogos"
            link="https://lista-jogos-roan.vercel.app/"
            desc="Uma plataforma de jogos com autenticação, favoritar jogos e listas personalizadas para usuários."
          />
          <PortfolioItem name="CurriCreator" link="https://curri-creator.vercel.app/" desc="Ferramenta simples e prática para gerar currículos em PDF com preenchimento guiado." />
          <PortfolioItem
            name="Calculadora Universitária"
            link="https://abraao4raujo.github.io/calculadoraAluno/"
            desc="Calculadora de médias acadêmicas com previsão de aprovação e notas necessárias."
          />
          <PortfolioItem
            name="eNewsTech"
            link="https://abraao4raujo.github.io/eNewsTech/"
            desc="Portal informativo com notícias, clima e eventos em Alagoas, feito com foco em responsividade."
          />
        </div>
      </div>
    </section>
  );
};

export default Projetos;
