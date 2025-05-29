import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import allImages from '../services/allImages';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-[5vw] flex gap-2 justify-between items-center flex-wrap">
      {/* logo + menu mobile */}
      <div className='flex items-center gap-4'>
      {/* Ícone hamburguer (mobile) */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />} 
      </button>

      {/* Logo do mobile reduzida */}
      <Link to={"/"}>
      <img 
      src={allImages.logo_horizontal_reduzida} 
      alt="Tiamate"
      className='w-[40px] md:hidden' />
      </Link>
      </div>

      
      {/* logo para as demais telas */}
      <Link to={"/"}>
      <img 
      src={allImages.Logo_Horizontal_01} 
      alt="Tiamate"
      className='hidden w-[100px] md:flex' />
      </Link>

      {/* Menu normal (desktop) */}
      <nav className="hidden md:flex gap-6">
        <Link to={"/"} onClick={() => setIsOpen(false)}>Início</Link>
            <Link to={"/nosso-cafe"} onClick={() => setIsOpen(false)}>Nosso Café</Link>
            <Link to={"/noticias"} onClick={() => setIsOpen(false)}>Noticias</Link> 
            <Link to={"/contato"} onClick={() => setIsOpen(false)}>Contato</Link>
            <Link to={"/cardapio"} onClick={() => setIsOpen(false)}>Cardapio</Link>
      </nav>

      {/* botao para login */}
      <Link to={"/login"} className='bg-[#c7794a] !text-black font-semibold px-4 py-2 rounded-md'>
          Seja um Franqueado
      </Link>

      {/* Menu lateral (mobile) */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 text-white p-6 transition-transform z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <nav className="flex flex-row-reverse justify-between">
          <X size={28} onClick={() => setIsOpen(false)} />
          <div className='flex flex-col gap-4'> 
            <Link to={"/"} onClick={() => setIsOpen(false)}>Início</Link>
            <Link to={"/nosso-cafe"} onClick={() => setIsOpen(false)}>Nosso Café</Link>
            <Link to={"/noticias"} onClick={() => setIsOpen(false)}>Noticias</Link> 
            <Link to={"/contato"} onClick={() => setIsOpen(false)}>Contato</Link>
            <Link to={"/cardapio"} onClick={() => setIsOpen(false)}>Cardapio</Link>
          </div>
          
        </nav>
      </div>

      
    </header>
  );
}
