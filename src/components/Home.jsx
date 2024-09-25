import ImagePerfil from '../assets/foto.jpeg'

const Home = () => {
  return (
    <div className='bg-[#1A1A1A] text-zinc-50 text-center py-16'>
        <img src={ImagePerfil} alt="imagem de perfil" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-semibold'>Yan Graim</h1>
        <div className='flex items-center justify-center'>
            <h3 className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-zinc-50'>Developer</h3>
            <span>👨🏽‍💻</span>
        </div> 
        <p className='mt-4 text-lg text-center p-4 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40'>Desenvolvedor especializado em soluções e apicações web modernas e responsivas.</p>
        <button className='border-2 border-[#4FC3F7] rounded-xl transform transition-transform duration-300 hover:scale-105 px-6 py-2 mt-8'>Baixar curriculo</button>
    </div>
  )
}

export default Home