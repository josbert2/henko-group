import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();

  const footerLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/about' },
    { name: 'Servicios', href: '/services' },
    { name: 'Noticias', href: '/news' },
    { name: 'Solicitar Cotización', href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-[#FFF8E7] to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFBC3F]/5 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo y Marca */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-3 rounded-2xl">
                  <img 
                  src="https://framerusercontent.com/images/jnuD1MI94Vu45n44bbJ8JUBqts.png" 
                  alt="logo" 
                  className="h-8 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  />
              </div>
              <span className="text-gray-800 text-2xl font-bold ml-2">Henko Group <span className="text-[#FFBC3F]">.</span></span>
              </div>
          </Link>
        </div>

        {/* Navegación */}
        <nav className="mb-12">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Copyright ©HENKO GRUP SPA — Powered by{' '}
            <Link 
              href="https://josbert.dev" 
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-[#FFBC3F] transition-colors duration-200 font-medium"
            >
              Josbert
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
