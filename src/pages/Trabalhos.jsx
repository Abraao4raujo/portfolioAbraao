import "../styles/Trabalhos.css";

const Trabalhos = () => {
  const experiencias = [
    {
      empresa: "HG Consultoria",
      periodo: "08/2024 - Atual",
      descricao: [
        "Responsável por todo o ciclo de desenvolvimento.",
        "Criação e manutenção de funcionalidades para garantir a eficiência do sistema.",
        "Design e prototipação de interfaces no Figma.",
        "Correção de bugs e otimização de código para melhor desempenho.",
        "Desenvolvimento de documentações técnicas.",
      ],
      habilidades: ["Resolução de problemas", "UI/UX", "Documentação", "Manutenção de Sistemas"],
    },
    {
      empresa: "SEPLAG - Secretaria do Planejamento e Gestão",
      periodo: "07/2024 – 08/2024",
      descricao: [
        "Instalação e configuração de máquinas e softwares conforme a necessidade dos usuários.",
        "Suporte técnico para garantir o funcionamento dos sistemas internos.",
        "Trabalho em equipe para otimizar a produtividade do setor.",
        "Destaque: setor premiado por maior produtividade na organização.",
      ],
      habilidades: ["Suporte Técnico", "Infraestrutura de TI", "Instalação de Equipamentos", "Configuração de Softwares", "Produtividade"],
    },
    {
      empresa: "SOFTCOM",
      periodo: "05/2023 - 08/2023",
      descricao: [
        "Responsável por instalar, configurar, testar e corrigir problemas do software da empresa.",
        "Realizei visitas presenciais com o objetivo de fornecer treinamento e esclarecer dúvidas.",
        "Destaque na resolução de problemas e na comunicação com clientes.",
      ],
      habilidades: ["Comunicação", "Trabalho em equipe", "Resolução de problemas"],
    },
  ];

  return (
    <section className="trabalhos">
      <div className="trabalhos-container">
        <h2 className="trabalhos-titulo">Experiência Profissional</h2>
        <ul className="trabalhos-lista">
          {experiencias.map(({ empresa, periodo, descricao, habilidades }, idx) => (
            <li key={idx} className="trabalho-item">
              <h3 className="empresa">{empresa} <span className="periodo">({periodo})</span></h3>
              <ul className="descricao">
                {descricao.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="habilidades-chave">
                <strong>Habilidades-chave:</strong> {habilidades.join(", ")}.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Trabalhos;
