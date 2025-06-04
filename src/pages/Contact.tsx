import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50" id='kontak'>
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
  )
}

export default Contact