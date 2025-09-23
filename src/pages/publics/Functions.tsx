import { useEffect } from "react";
import "animate.css";
import feather from "feather-icons";

export default function Funcionalidades() {
    useEffect(() => {
        feather.replace();
    }, []);

    const features = [
        {
            icon: "folder",
            title: "Gestión de Proyectos",
            items: [
                "Tableros visuales para organizar tus trabajos",
                "Sistema de milestones y entregables",
                "Plantillas personalizables para diferentes tipos de proyectos",
            ],
        },
        {
            icon: "clock",
            title: "Control de Tiempo",
            items: [
                "Timer integrado para registrar horas trabajadas",
                "Reportes automáticos de productividad",
                "Seguimiento de tiempo por proyecto y cliente",
            ],
        },
        {
            icon: "dollar-sign",
            title: "Facturación Profesional",
            items: [
                "Generador de facturas personalizables",
                "Recordatorios automáticos de pagos pendientes",
                "Integración con Stripe y PayPal",
            ],
        },
        {
            icon: "users",
            title: "Gestión de Clientes",
            items: [
                "Base de datos centralizada de clientes",
                "Historial de comunicaciones y proyectos",
                "Sistema de contratos digitales",
            ],
        },
        {
            icon: "bar-chart-2",
            title: "Dashboard Analítico",
            items: [
                "Métricas clave de tu negocio freelance",
                "Proyecciones de ingresos y gastos",
                "Análisis de rentabilidad por proyecto",
            ],
        },
        {
            icon: "file-text",
            title: "Plantillas y Documentos",
            items: [
                "Propuestas profesionales personalizables",
                "Contratos pre-diseñados para diferentes servicios",
                "Biblioteca de documentos reutilizables",
            ],
        },
    ];

    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="hero-gradient text-white py-20 px-6 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl animate__animated animate__fadeInUp">
                    Funcionalidades de FreelanceHub
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg animate__animated animate__fadeInUp animate__delay-1s">
                    Todas las herramientas que necesitas para gestionar tu negocio freelance en un solo lugar.
                </p>
            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition animate__animated animate__fadeInUp"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        >
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 mb-4">
                                <i data-feather={feature.icon}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                {feature.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
