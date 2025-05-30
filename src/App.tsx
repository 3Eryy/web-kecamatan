import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, Users, FileText, Calendar, Search, Menu, X, Building, Shield, Globe, Heart, Send } from 'lucide-react';

export default function GovernmentLanding() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const services = [
        {
            title: "Layanan Publik",
            description: "Akses layanan pemerintah penting secara online",
            icon: <FileText className="w-8 h-8" />,
            features: ["Pengolahan Dokumen", "Izin & Lisensi", "Layanan Pajak", "Catatan Sipil"]
        },
        {
            title: "Program Masyarakat",
            description: "Inisiatif kesejahteraan sosial dan pembangunan",
            icon: <Heart className="w-8 h-8" />,
            features: ["Program Kesehatan", "Dukungan Pendidikan", "Pembangunan Ekonomi", "Bantuan Sosial"]
        },
        {
            title: "Keamanan Publik",
            description: "Layanan tanggap darurat dan keamanan",
            icon: <Shield className="w-8 h-8" />,
            features: ["Tanggap Darurat", "Manajemen Lalu Lintas", "Kesiapsiagaan Bencana", "Keamanan Publik"]
        },
        {
            title: "Layanan Digital",
            description: "Platform pemerintah digital modern",
            icon: <Globe className="w-8 h-8" />,
            features: ["Aplikasi Online", "Pembayaran Digital", "E-Government", "Layanan Mobile"]
        }
    ];

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

    const quickLinks = [
        "Akta Kelahiran", "Izin Usaha", "Pembayaran Pajak", "Izin Bangunan",
        "Akta Nikah", "Perpanjangan KTP", "Pajak Properti", "Formulir Pengaduan"
    ];

    const handleLinkClick = (link) => {
        if (link === "Formulir Pengaduan") {
            setIsModalOpen(true);
        } else {
            // Handle other links
            console.log(`Clicked: ${link}`);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email && formData.message) {
            console.log('Form submitted:', formData);
            alert('Pengaduan Anda telah berhasil dikirim!');
            setFormData({ email: '', message: '' });
            setIsModalOpen(false);
        } else {
            alert('Mohon lengkapi semua field!');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-blue-900 text-white shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <Building className="w-8 h-8" />
                            <div>
                                <h1 className="text-xl font-bold">Kelonmas</h1>
                                <p className="text-xs text-blue-200">Melayani Masyarakat</p>
                            </div>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="hover:text-blue-200 transition-colors">Beranda</a>
                            <a href="#" className="hover:text-blue-200 transition-colors">Layanan</a>
                            <a href="#" className="hover:text-blue-200 transition-colors">Berita</a>
                            <a href="#" className="hover:text-blue-200 transition-colors">Tentang</a>
                            <a href="#" className="hover:text-blue-200 transition-colors">Kontak</a>
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

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
                <div className="container mx-auto px-4 py-20">
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
                                    className="w-full px-6 py-4 text-gray-900 text-lg rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
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


            {/* Quick Links */}
            <section className="bg-white py-12 shadow-sm">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Akses Cepat</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {quickLinks.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => handleLinkClick(link)}
                                className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-900 transition-all text-sm font-medium text-center border hover:border-blue-200 transform hover:scale-105"
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                    {/* modal overlay */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
                            <div className='bg-white rounded-lg shadow-xl w-full max-w-md mx-auto'>
                                {/* Modal header */}
                                <div className='flex items-center justify-between p-6 border-'>
                                    <h3 className='text-lg font-semibold text-gray-900'>Formulir Pengaduan</h3>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>
                                {/* modal body */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <label htmlFor='foto_keluhan' className="block text-sm font-medium text-gray-700 mb-2">
                                            Foto keluhan <span className='text-red-500'>*</span>
                                        </label>
                                        <input 
                                        type="file" 
                                        name="foto_keluhan"
                                        id="foto_keluhan" 
                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                        placeholder='Masukan foto keluhan'/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>
                                            Email <span className='text-red-500'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Masukkan email Anda"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-2'>
                                            Pesan Pengaduan <span className='text-red-500'>*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tuliskan pengaduan Anda di sini..."
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400 resize-none"
                                            required
                                        />
                                    </div>
                                    {/* modal footer */}
                                    <div className='flex gap-3 justify-end'>
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                                        >
                                            Batal
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center gap-2"
                                        >
                                            <Send size={16} />
                                            Kirim
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Layanan pemerintah komprehensif yang dirancang untuk memenuhi kebutuhan masyarakat dengan efisiensi dan transparansi.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
                                onClick={() => setActiveService(index)}
                            >
                                <div className="text-blue-600 mb-4">{service.icon}</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-500">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* News & Announcements */}
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

            {/* Statistics */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">250.000+</div>
                            <div className="text-blue-200">Warga Terlayani</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-blue-200">Layanan Online</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-blue-200">Akses Digital</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">95%</div>
                            <div className="text-blue-200">Tingkat Kepuasan</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h3>
                            <p className="text-gray-600">Kami di sini untuk membantu dan menjawab pertanyaan yang mungkin Anda miliki</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Telepon</h4>
                                <p className="text-gray-600">+62 123 456 7890</p>
                                <p className="text-gray-600">Sen-Jum 08:00-17:00</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                                <p className="text-gray-600">info@pemerintah.go.id</p>
                                <p className="text-gray-600">Respon 24/7</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Kantor</h4>
                                <p className="text-gray-600">Jl. Pemerintah No. 123</p>
                                <p className="text-gray-600">Pusat Kota, 12345</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
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
        </div>
    );
}