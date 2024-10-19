import ProjectCard from "./ProjectCard";

const projetosPortfolio = [
  {
    id: 1,
    nome: "Site de Fotografia",
    descricao:
      "Um site responsivo para exibição de portfólios de fotografia, com galeria de imagens e efeitos de transição.",
    imagem:
      "https://images.pexels.com/photos/442573/pexels-photo-442573.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://www.exemplo.com/projeto-fotografia",
  },
  {
    id: 2,
    nome: "E-commerce de Moda",
    descricao:
      "Uma loja online para venda de roupas e acessórios, com carrinho de compras e integração com sistema de pagamento.",
    imagem:
      "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://www.exemplo.com/projeto-ecommerce",
  },
  {
    id: 3,
    nome: "Aplicativo de Fitness",
    descricao:
      "Um aplicativo de rastreamento de atividades físicas, com monitoramento de treino e dietas personalizadas.",
    imagem:
      "https://images.pexels.com/photos/4162581/pexels-photo-4162581.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://www.exemplo.com/projeto-fitness",
  },
  {
    id: 4,
    nome: "Blog de Viagens",
    descricao:
      "Um blog onde os usuários podem compartilhar experiências de viagens, com integração de mapa e dicas de locais turísticos.",
    imagem:
      "https://images.pexels.com/photos/28917117/pexels-photo-28917117/free-photo-of-aviao-suico-em-voo-contra-ceu-nublado.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://www.exemplo.com/projeto-blog",
  },
  {
    id: 5,
    nome: "Sistema de Gerenciamento de Tarefas",
    descricao:
      "Um sistema simples para gerenciar tarefas e organizar atividades diárias, com funcionalidades de calendário e lembretes.",
    imagem:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://www.exemplo.com/projeto-tarefas",
  },
];

const Projects = () => {
  return (
    <div className="py-16 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <h2 className="text-4xl font-semibold text-center mb-14 text-zinc-50">
        Projetos
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
        {projetosPortfolio.map((projeto) => (
          <ProjectCard
            key={projeto.id}
            nome={projeto.nome}
            descricao={projeto.descricao}
            imagem={projeto.imagem}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
