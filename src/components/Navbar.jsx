const Navbar = () => {
  return (
    <nav className="text-zinc-50 border-b-2 border-[#4FC3F7] px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-semibold hidden md:inline">Yan Graim</div>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            Sobre
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projetos
          </a>
          <a href="#services" className="hover:text-blue-400">
            Habilidades
          </a>
        </div>
        <button className="border-2 border-[#4FC3F7] rounded-xl hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2">
          Contato
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
