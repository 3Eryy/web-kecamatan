import axios from 'axios';
import { Send, X } from 'lucide-react';
import { useState } from 'react'
import { API_URL, getToken } from '../utils/helper';
import Alert from '../components/Alert';

const QuickLinks = () => {

    const quickLinks = [
        "Akta Kelahiran", "Izin Usaha", "Pembayaran Pajak", "Izin Bangunan",
        "Akta Nikah", "Perpanjangan KTP", "Pajak Properti", "Formulir Pengaduan"
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        foto: '',
        alamat: '',
        pesan: ''
    });
    const [previewFoto, setPreviewFoto] = useState('')
    const [message, setMessage] = useState({
        type : 'success',
        message : ''
    })


    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ foto : '' ,alamat: '', pesan: '' });
    };

    const handleLinkClick = (link : any) => {
        if (link === "Formulir Pengaduan") {
            setIsModalOpen(true);
        } else {
            // Handle other links
            console.log(`Clicked: ${link}`);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, files } = e.target as HTMLInputElement;
        if (type === "file") {
            setFormData(prev => ({
                ...prev,
                [name]: files && files[0] ? files[0] : ''
            }));
            setPreviewFoto(URL.createObjectURL(files[0]))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }



    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const sendData = new FormData();
        sendData.append('foto', formData.foto);
        sendData.append('alamat', formData.alamat);
        sendData.append('pesan', formData.pesan);

        axios.post(`${API_URL}/pengaduan`, sendData, {
            headers: {
                Authorization : `Bearer ${getToken()}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            const message = res.data.message
            setMessage({...message, type : "success", message : message})
        })
        .catch(err => {
            const message = err.response.data.message
            setMessage({...message, type : "error", message : message})
        })
        .finally(()=> {
            setTimeout(function() {
                setMessage({...message, type : "", message : ""})
            }, 3000);
            closeModal();
        })
    };

    
    
  return (
    <section className="bg-white py-12 shadow-sm" id='akses_cepat'>
        <div className="container mx-auto px-4">
            {message.message != '' &&
                <Alert type={message.type}>{message.message}</Alert>
            }
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
                                <label htmlFor='foto' className="block text-sm font-medium text-gray-700 mb-2">
                                    Foto keluhan <span className='text-red-500'>*</span>
                                </label>
                                <input 
                                type="file" 
                                name="foto"
                                id="foto" 
                                onChange={handleInputChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                placeholder='Masukan foto keluhan'/>
                                <img src={previewFoto} className="mt-4" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="alamat" className='block text-sm font-medium text-gray-700 mb-2'>
                                    Alamat <span className='text-red-500'>*</span>
                                </label>
                                <textarea
                                    rows={3}
                                    id="alamat"
                                    name="alamat"
                                    value={formData.alamat}
                                    onChange={handleInputChange}
                                    placeholder="Masukkan alamat yang diadukan"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="pesan" className='block text-sm font-medium text-gray-700 mb-2'>
                                    Pesan Pengaduan <span className='text-red-500'>*</span>
                                </label>
                                <textarea
                                    id="pesan"
                                    name="pesan"
                                    value={formData.pesan}
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
  )
}

export default QuickLinks