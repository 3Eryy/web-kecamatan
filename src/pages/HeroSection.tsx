import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white" id='beranda'>
        <div className="container mx-auto px-4 py-33">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-6">
                    Membangun Masa Depan yang Lebih Baik
                    <span className="block text-blue-200 text-4xl mt-2">Bersama</span>
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                    Akses layanan pemerintah, tetap terinformasi dengan berita terbaru, dan terhubung dengan administrasi lokal Anda melalui platform digital komprehensif kami.
                </p>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Cari layanan, informasi, atau dokumen..."
                            className="w-full px-6 py-4 bg-white text-gray-900 text-lg rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                        />
                        <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                            <Search className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                        Layanan Online
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105">
                        Kontak Darurat
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection