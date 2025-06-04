import { ChevronRight, FileText, Globe, Heart, Shield } from 'lucide-react';
import React, { useState } from 'react'

const Services = () => {

    const [activeService, setActiveService] = useState(0);

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
    
  return (
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
  )
}

export default Services