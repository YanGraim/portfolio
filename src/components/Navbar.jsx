const Navbar = () => {
  return (
    <nav className='bg-[#1A1A1A] text-[#C1C1C1] px-8 md:px-16 lg:-px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-semibold hidden md:inline'>Yan Graim</div>
            <div className='flex gap-6'>
                <a href="#home" className='hover:text-blue-400'>Home</a>
                <a href="#about" className='hover:text-blue-400'>Sobre</a>
                <a href="#projects" className='hover:text-blue-400'>Projetos</a>
                <a href="#services" className='hover:text-blue-400'>Serviços</a>
            </div>
            <button className='border-2 border-[#4FC3F7] rounded-xl hidden md:inline transform transition-transform duration-300 hover:scale-105 px-6 py-2'>Contato</button>
        </div>
    </nav>
  )
}

export default Navbar