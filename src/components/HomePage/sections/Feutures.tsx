import ScrollAnimation from "../../ScrollAnimation"

export default function Feutures() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <ScrollAnimation animation="animate__fadeInUp">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Simplifica tu flujo de trabajo freelance
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                            Todas las herramientas que necesitas en un solo lugar.
                        </p>
                    </div>
                </ScrollAnimation>


                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {["folder", "clock", "dollar-sign", "users"].map((icon, i) => (
                        <ScrollAnimation animation={`animate__fadeInUp animate__delay-0-${i + 1}s`}>
                            <div key={i} className={`feature-card bg-white p-6 rounded-lg shadow-md transition`}>
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                    <i data-feather={icon}></i>
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">
                                    {icon === "folder" && "Gestión de Proyectos"}
                                    {icon === "clock" && "Control de Tiempo"}
                                    {icon === "dollar-sign" && "Facturación"}
                                    {icon === "users" && "Gestión de Clientes"}
                                </h3>
                                <p className="mt-2 min-h-24 text-base text-gray-500">
                                    {icon === "folder" && "Organiza proyectos con milestones, tareas y seguimiento de progreso. Almacena todos los archivos relacionados."}
                                    {icon === "clock" && "Timer integrado y reportes automáticos de horas trabajadas. Analiza tu productividad semanal/mensual."}
                                    {icon === "dollar-sign" && "Genera facturas profesionales, sigue pagos y calcula impuestos. Integración con Stripe y PayPal."}
                                    {icon === "users" && "Base de datos centralizada con historial de proyectos y comunicaciones. Contratos digitales incluidos."}
                                </p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>

    )
}