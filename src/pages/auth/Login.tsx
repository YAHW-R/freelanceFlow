import React, { useState } from "react";

interface LoginFormData {
    usernameOrEmail: string;
    password: string;
}

export default function LoginPage() {
    const [formData, setFormData] = useState<LoginFormData>({
        usernameOrEmail: "",
        password: "",
    });

    const [errors, setErrors] = useState<Partial<LoginFormData>>({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
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
        setErrors({});

        try {
            // 👉 Aquí conectas con tu backend
            console.log("Enviando login:", formData);

            // Simulación de éxito
            setTimeout(() => {
                setLoading(false);
                alert("Login exitoso ✅");
            }, 1500);
        } catch {
            setLoading(false);
            setErrors({
                usernameOrEmail: "Usuario o correo inválido",
                password: "Contraseña incorrecta",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Formulario */}
            <div className="flex-grow flex items-center justify-center px-6 py-12">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8  animate__animated animate__fadeInUp">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
                        Iniciar Sesión
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Usuario o Correo */}
                        <div>
                            <label
                                htmlFor="usernameOrEmail"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Usuario o Correo
                            </label>
                            <input
                                id="usernameOrEmail"
                                name="usernameOrEmail"
                                type="text"
                                placeholder="ejemplo@correo.com"
                                value={formData.usernameOrEmail}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.usernameOrEmail && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.usernameOrEmail}
                                </p>
                            )}
                        </div>

                        {/* Contraseña */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Contraseña
                            </label>
                            <div className="relative mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-indigo-600 text-sm"
                                >
                                    {showPassword ? "Ocultar" : "Mostrar"}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Botón */}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {loading ? "Cargando..." : "Ingresar"}
                            </button>
                        </div>
                    </form>

                    {/* Enlaces extras */}
                    <p className="text-sm text-gray-600 mt-6 text-center">
                        ¿No tienes cuenta?{" "}
                        <a
                            href="/register"
                            className="text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                            Regístrate aquí
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
