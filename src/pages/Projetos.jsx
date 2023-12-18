import PortfolioItem from "../components/PortfolioItem";

const Project = () => {
  return (
    <div>
      <h2 className="title">Projetos</h2>
      <div className="containerProjects">
        <PortfolioItem
          name="Lista de Jogos"
          link="https://lista-jogos-roan.vercel.app/"
          desc="uma plataforma de jogos inovadora com recursos avançados, garantindo segurança com filtragem e autenticação de contas. Adicionei a opção de favoritar jogos, permitindo aos usuários criar listas personalizadas para uma experiência mais eficiente."
        />
        <PortfolioItem
          name="CurriCreator"
          link="https://curri-creator.vercel.app/"
          desc="Desenvolvi o CurriCreator para tornar a criação de currículos mais simples. Com recursos como preenchimento fácil e geração instantânea de PDF, a plataforma destaca suas habilidades de maneira eficiente."
        />
        <PortfolioItem
          name="Calculadora para Universitários"
          link="https://abraao4raujo.github.io/calculadoraAluno/"
          desc="Desenvolvi esta calculadora acadêmica pensando em facilitar a vida dos estudantes universitários. Com ela, é possível calcular as médias de forma precisa, descobrir a pontuação necessária para aprovação e até mesmo prever o status (aprovado/reprovado)."
        />
        <PortfolioItem
          name="eNewsTech"
          link="https://abraao4raujo.github.io/eNewsTech/"
          desc="Desenvolvi o eNewsTech com o objetivo de levar informações precisas e confiáveis sobre os mais variados assuntos. Além disso, o eNewsTech também oferece uma seção especial para eventos que estão acontecendo em Alagoas. E para completar, ainda disponibiliza a temperatura atual em Alagoas."
        />
      </div>
    </div>
  );
};

export default Project;
