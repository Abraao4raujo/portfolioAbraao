import PortfolioItem from "../../public/components/PortfolioItem";

const Project = () => {
  return (
    <div>
      <h2 className="title">Projetos</h2>
      <div className="containerProjects">
        <PortfolioItem
          name="Lista de Jogos"
          link="https://github.com/Abraao4raujo/ListaJogos"
          desc="Lista De Jogos Com Barra De Pesquisa, Filtro e Front-End Interativo. Você pode criar uma conta e salvar seus jogos favoritos, com opção de visualizar os jogos favoritados."
        />
        <PortfolioItem
          name="Ecossistema"
          link="https://github.com/Abraao4raujo/ecossistema"
          desc="Um Projeto Que Explora E Simula Um Ecossistema Virtual Em Java, Permitindo Aos Usuários Observar As Interações Entre Diferentes Espécies De Animais E Plantas."
        />
        <PortfolioItem
          name="Calculadora para Estudantes"
          link="https://github.com/Abraao4raujo/calculadoraAluno"
          desc="Uma Calculadora Para O Estudantes Calcular Sua Média E Verificar Quanto Precisa Para Passar."
        />
        <PortfolioItem
          name="Sistema de presença"
          link="https://github.com/Abraao4raujo/presencaAula"
          desc="Software que gera um QrCode e os alunos podem escanear para marcar sua presença, os alunos presentes vão aparecer apenas para o profissional da educação."
        />
      </div>
    </div>
  );
};

export default Project;
