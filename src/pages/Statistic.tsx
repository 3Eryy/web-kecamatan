const Statistic = () => {
  return (
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
  )
}

export default Statistic