import { Building } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-3 mb-4">
                        <Building className="w-6 h-6" />
                        <h4 className="text-lg font-bold">Portal Pemerintah</h4>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Berkomitmen melayani masyarakat dengan transparansi, efisiensi, dan keunggulan.
                    </p>
                </div>

                <div>
                    <h5 className="font-bold mb-4">Tautan Cepat</h5>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Layanan</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Dokumen</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Izin</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Pembayaran</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-bold mb-4">Informasi</h5>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Berita</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Acara</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Kebijakan</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-bold mb-4">Dukungan</h5>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Pusat Bantuan</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Umpan Balik</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Aksesibilitas</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Kelonmas. Seluruh hak cipta dilindungi. | Kebijakan Privasi | Syarat Layanan</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer