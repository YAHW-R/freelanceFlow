import "animate.css";

export default function Precios() {
    const plans = [
        {
            name: "Free (Gratis)",
            price: "$0/mes",
            description: "Ideal para comenzar a gestionar proyectos de manera sencilla.",
            features: [
                "Hasta 3 proyectos activos",
                "1 GB de almacenamiento",
                "Facturas básicas (máx. 5/mes)",
                "Soporte por correo electrónico",
                "Plantillas estándar",
            ],
            highlight: false,
        },
        {
            name: "Pro (Recomendado)",
            price: "$9/mes o $90/año (20% de descuento)",
            description: "La mejor opción para freelancers profesionales que quieren crecer.",
            features: [
                "Proyectos ilimitados",
                "10 GB de almacenamiento",
                "Facturas ilimitadas con personalización",
                "Integración con pasarelas de pago (1% comisión)",
                "Soporte prioritario",
                "Plantillas premium",
                "Dashboard analítico avanzado",
                "Contratos digitales",
            ],
            highlight: true,
        },
        {
            name: "Business",
            price: "$19/mes o $190/año (20% de descuento)",
            description: "Perfecto para equipos y negocios que necesitan mayor capacidad y soporte premium.",
            features: [
                "Acceso para equipo (hasta 3 usuarios)",
                "50 GB de almacenamiento",
                "Branding personalizado (white-label)",
                "Reportes personalizados",
                "Soporte premium 24/7",
                "Onboarding personalizado",
                "Acceso a nuevas funcionalidades beta",
            ],
            highlight: false,
        },
    ];

    return (
        <div className="bg-white text-gray-800">
            {/* Hero */}
            <section className="hero-gradient text-white py-20 px-6 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl animate__animated animate__fadeInUp">
                    Planes y Precios
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg animate__animated animate__fadeInUp animate__delay-1s">
                    Elige el plan que mejor se adapte a tus necesidades y haz crecer tu negocio freelance.
                </p>
            </section>

            {/* Pricing Section */}
            <section className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`rounded-xl border p-8 shadow-md animate__animated animate__fadeInUp animate__delay-0-${i + 1}s`}
                        >
                            {plan.highlight && (
                                <span className="inline-block bg-indigo-600 text-white text-xs px-3 py-1 rounded-full mb-4">
                                    Recomendado
                                </span>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-lg text-indigo-600 font-semibold mb-4">{plan.price}</p>
                            <p className="text-gray-600 mb-6">{plan.description}</p>
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-start text-gray-700">
                                        <span className="text-indigo-600 mr-2">✔</span> {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${plan.highlight
                                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                            >
                                {plan.highlight ? "Elegir Plan Pro" : `Comenzar ${plan.name}`}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Guarantee */}
                <div className="text-center mt-16 animate__animated animate__fadeInUp animate__delay-1s">
                    <p className="text-gray-700 text-lg font-medium">
                        ⭐ Prueba cualquier plan pagado 14 días con garantía de devolución ⭐
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} FreelanceHub. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}