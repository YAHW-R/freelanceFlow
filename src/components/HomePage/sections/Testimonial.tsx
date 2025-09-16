import ScrollAnimation from "../../ScrollAnimation"

export default function Testimonials() {
    return (
        <section className="py-16 bg-indigo-700 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <ScrollAnimation animation="animate__fadeInUp" className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Lo que dicen otros freelancers
                    </h2>
                </ScrollAnimation>
                <div className="grid md:grid-cols-3 gap-8">
                    {[{
                        name: "María Gómez",
                        role: "Diseñadora UX/UI",
                        img: "http://static.photos/people/200x200/1",
                        text: "FreelanceHub ha transformado completamente mi negocio. Ahora puedo gestionar proyectos, facturar y analizar mi productividad en un solo lugar."
                    }, {
                        name: "Carlos Ruiz",
                        role: "Desarrollador Web",
                        img: "http://static.photos/people/200x200/2",
                        text: "El sistema de control de tiempo me ha ayudado a optimizar mis horas de trabajo y a facturar con precisión. ¡Increíble herramienta!"
                    }, {
                        name: "Ana Torres",
                        role: "Redactora Freelance",
                        img: "http://static.photos/people/200x200/3",
                        text: "Finalmente una solución completa para freelancers. La gestión de clientes y contratos ha simplificado enormemente mi flujo de trabajo."
                    }].map((t, i) => (
                        <ScrollAnimation animation={`animate__fadeInUp animate__delay-0-${i + 1}s`}>
                            <div key={i} className={`bg-indigo-600 p-6 rounded-lg`}>
                                <div className="flex items-center">
                                    <img className="h-12 w-12 rounded-full" src={t.img} alt={t.name} />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium">{t.name}</h4>
                                        <p className="text-indigo-200">{t.role}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-base text-indigo-100">“{t.text}”</p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section >
    )
}