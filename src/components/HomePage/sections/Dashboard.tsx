import ScrollAnimation from "../../ScrollAnimation"

export default function Dashboard() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:grid lg:grid-cols-12 lg:gap-8">
                <ScrollAnimation animation="animate__fadeInLeft" className="lg:col-span-6">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Panel de control intuitivo
                    </h2>
                    <p className="mt-3 text-lg text-gray-500">
                        Visualiza todas las métricas clave de tu negocio freelance en un dashboard personalizable.
                    </p>
                    <ul className="mt-8 space-y-6">
                        <li className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white">
                                    <i data-feather="check" className="h-4 w-4"></i>
                                </div>
                            </div>
                            <p className="ml-3 text-base text-gray-700">
                                Proyecciones de ingresos y análisis de rentabilidad por proyecto
                            </p>
                        </li>
                        <li className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white">
                                    <i data-feather="check" className="h-4 w-4"></i>
                                </div>
                            </div>
                            <p className="ml-3 text-base text-gray-700">
                                Gráficos de flujo de trabajo y carga laboral
                            </p>
                        </li>
                        <li className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white">
                                    <i data-feather="check" className="h-4 w-4"></i>
                                </div>
                            </div>
                            <p className="ml-3 text-base text-gray-700">
                                Alertas y recordatorios automáticos para pagos y deadlines
                            </p>
                        </li>
                    </ul>
                </ScrollAnimation>
                <ScrollAnimation animation="animate__fadeInRight" className="mt-12 lg:mt-0 lg:col-span-6">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <img
                            className="w-full"
                            src="http://static.photos/technology/1024x576/42"
                            alt="Dashboard preview"
                        />
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}   