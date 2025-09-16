import React, { useState } from "react";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "Soporte técnico",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Error al enviar el mensaje");
            }

            setSuccess("¡Tu mensaje ha sido enviado con éxito!");
            setFormData({ name: "", email: "", subject: "Soporte técnico", message: "" });
        } catch {
            setError("Hubo un problema al enviar tu mensaje. Intenta de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">

            <main className="flex-grow px-6 py-12 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Contáctanos
                </h1>

                {/* Opciones de contacto */}
                <section className="mb-12 grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-indigo-600">
                            Soporte técnico
                        </h3>
                        <p className="text-gray-700">Respuesta en menos de 24h</p>
                        <a
                            href="mailto:soporte@freelanceflow.com"
                            className="text-indigo-600 hover:underline"
                        >
                            soporte@freelanceflow.com
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-indigo-600">
                            Consultas comerciales
                        </h3>
                        <a
                            href="mailto:hola@freelanceflow.com"
                            className="text-indigo-600 hover:underline"
                        >
                            hola@freelanceflow.com
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-indigo-600">Empresas</h3>
                        <p className="text-gray-700">Soluciones personalizadas</p>
                        <a
                            href="mailto:enterprise@freelanceflow.com"
                            className="text-indigo-600 hover:underline"
                        >
                            enterprise@freelanceflow.com
                        </a>
                    </div>
                </section>

                {/* Formulario de contacto */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Envíanos un mensaje
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Nombre */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nombre completo
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Tu nombre completo"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="ejemplo@correo.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Asunto */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Asunto
                            </label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>Soporte técnico</option>
                                <option>Consulta comercial</option>
                                <option>Sugerencia</option>
                                <option>Otro</option>
                            </select>
                        </div>

                        {/* Mensaje */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Mensaje
                            </label>
                            <textarea
                                name="message"
                                placeholder="Escribe tu mensaje aquí..."
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Estados */}
                        {success && <p className="text-green-600 text-sm">{success}</p>}
                        {error && <p className="text-red-600 text-sm">{error}</p>}

                        {/* Botón */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                        >
                            {loading ? "Enviando..." : "Enviar mensaje"}
                        </button>
                    </form>
                </section>

                {/* Información adicional */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Información adicional
                    </h2>
                    <p className="text-gray-700">
                        <strong>Dirección:</strong> [Dirección física si aplica]
                    </p>
                    <p className="text-gray-700">
                        <strong>Teléfono:</strong> [Número de contacto si aplica]
                    </p>
                    <p className="text-gray-700">
                        <strong>Horario de atención:</strong> Lunes a Viernes, 9:00 a 18:00
                    </p>
                </section>

                {/* FAQ */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Preguntas frecuentes
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                        <li>
                            <strong>¿Cómo puedo solicitar una característica nueva?</strong>{" "}
                            Usa nuestro formulario de contacto seleccionando “Sugerencia”.
                        </li>
                        <li>
                            <strong>¿Ofrecen demostraciones personalizadas?</strong> Sí,
                            especialmente para el plan Business.
                        </li>
                        <li>
                            <strong>¿Tienen API disponible?</strong> Actualmente en desarrollo,
                            pronto disponible para planes Pro y Business.
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
