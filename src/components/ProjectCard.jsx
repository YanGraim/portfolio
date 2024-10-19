const ProjectCard = (props) => {
  const { imagem, nome, descricao } = props;
  return (
    <div className="rounded-lg overflow-hidden bg-black shadow-lg shadow-zinc-950 cursor-pointer transform transition-transform duration-300 hover:scale-105">
      <img className="w-full" src={imagem} alt="exemplo" />
      <div className="text-zinc-50 p-4">
        <h3 className="text-xl font-bold">{nome}</h3>
        <p className="font-thin">{descricao}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
