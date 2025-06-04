import { Building, Menu, X } from "lucide-react"
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
    <header className="bg-blue-900 text-white shadow-lg fixed w-full">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-3">
                    <Building className="w-8 h-8" />
                    <div>
                        <h1 className="text-xl font-bold">SIKEMAS</h1>
                        <p className="text-xs text-blue-200">Sistem Keluhan Masyarakat</p>
                    </div>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <a href="#beranda" className="hover:text-blue-200 transition-colors">Beranda</a>
                    <a href="#akses_cepat" className="hover:text-blue-200 transition-colors">Akses cepat</a>
                    <a href="#layanan" className="hover:text-blue-200 transition-colors">Layanan</a>
                    <a href="#berita" className="hover:text-blue-200 transition-colors">Berita</a>
                    <a href="#kontak" className="hover:text-blue-200 transition-colors">Kontak</a>
                </nav>

                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden bg-blue-800 border-t border-blue-700">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex flex-col space-y-3">
                        <a href="#" className="hover:text-blue-200 transition-colors">Beranda</a>
                        <a href="#" className="hover:text-blue-200 transition-colors">Layanan</a>
                        <a href="#" className="hover:text-blue-200 transition-colors">Berita</a>
                        <a href="#" className="hover:text-blue-200 transition-colors">Tentang</a>
                        <a href="#" className="hover:text-blue-200 transition-colors">Kontak</a>
                    </nav>
                </div>
            </div>
        )}
    </header>
  )
}

export default Navbar