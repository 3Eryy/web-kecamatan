import { Calendar, ChevronRight } from 'lucide-react'

const News = () => {

    
    const news = [
        {
            date: "28 Mei 2025",
            title: "Platform Layanan Digital Baru Diluncurkan",
            excerpt: "Masyarakat kini dapat mengakses 50+ layanan pemerintah secara online melalui platform terintegrasi baru kami.",
            category: "Teknologi"
        },
        {
            date: "25 Mei 2025",
            title: "Ekspansi Program Pembangunan Masyarakat",
            excerpt: "Alokasi anggaran meningkat 30% untuk infrastruktur pedesaan dan program pendidikan.",
            category: "Pembangunan"
        },
        {
            date: "22 Mei 2025",
            title: "Sukses Inisiatif Kesehatan Masyarakat",
            excerpt: "Cakupan vaksinasi mencapai 95% mengikuti program penjangkauan kesehatan komprehensif kami.",
            category: "Kesehatan"
        }
    ];
    
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Berita Terbaru</h3>
                    <p className="text-gray-600">Tetap terbaru dengan perkembangan dan pengumuman terkini</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                    Lihat Semua Berita <ChevronRight className="w-4 h-4 ml-1" />
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {news.map((item, index) => (
                    <article key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="flex items-center mb-3">
                            <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                            <span className="text-sm text-gray-500">{item.date}</span>
                            <span className="ml-auto bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                {item.category}
                            </span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-600 mb-4">{item.excerpt}</p>
                        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                            Baca Selengkapnya <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default News