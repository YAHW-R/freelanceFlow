import { Link } from "react-router-dom"
import ScrollAnimation from "../../ScrollAnimation"

export default function CTA() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <ScrollAnimation animation="animate__zoomIn" className="bg-indigo-50 rounded-lg py-12 px-6">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        ¿Listo para transformar tu negocio freelance?
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Comienza gratis hoy mismo y descubre cómo FreelanceHub puede ayudarte.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Link to="/register" className="px-6 py-3 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition">
                            Crear cuenta gratis
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">Sin tarjeta de crédito requerida.</p>
                </ScrollAnimation>
            </div>
        </section>
    )
}