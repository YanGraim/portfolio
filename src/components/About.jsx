import ImagePerfil from "../assets/foto.jpeg";

const About = () => {
  return (
    <div className="bg-[#1A1A1A] text-zinc-50 text-center py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <h2 className="text-4xl font-semibold text-center mb-14">Sobre mim</h2>
        <div className="flex flex-col lg:flex-row items-center md:space-x-12">
          <img
            src={ImagePerfil}
            alt="Imagem de perfil"
            className="w-82 h-80 rounded object-cover mb-8 lg:mb-0"
          />
          <p>
            Sou Yan Graim, desenvolvedor apaixonado por{" "}
            <strong>C# ASP.NET e Entity Framework</strong>, com experiência em
            SQL Server, JavaScript, HTML, CSS, Tailwind e React . Minha jornada
            na programação começou por curiosidade e hoje tenho um foco especial
            em backend e otimização, influenciado pela minha formação em
            Engenharia de Produção. Meu objetivo é conquistar minha primeira
            vaga como desenvolvedor e expandir meus conhecimentos. Um dos meus
            projetos marcantes foi a criação de um sistema bancário em C# com
            Windows Forms, desenvolvido do zero. Além da tecnologia, sou
            apaixonado por música, esportes e games, e sempre busco estar por
            dentro das inovações.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
