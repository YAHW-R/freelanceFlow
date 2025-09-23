import { Link, useLocation } from "react-router-dom"

export default function Navbar() {

    const location = useLocation()
    const pathname = location.pathname
    const paths = ['/', '/functions', '/prices', '/blog', '/contact']
    const pathsPage = { '/': "Inicio", '/functions': "Funciones", '/prices': "Precios", '/blog': "Blog", '/contact': "Contacto" }

    const authPaths = ['/register', '/login']

    if (!paths.includes(pathname) && authPaths.includes(pathname)) return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <i data-feather="briefcase" className="h-8 w-8 text-indigo-600"></i>
                        <span className="ml-2 text-xl font-bold text-gray-900 select-none">
                            FreelanceHub
                        </span>
                    </Link>


                    {/* Links */}
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-indigo-600 font-medium text-sm"
                        >
                            Volver al inicio
                        </Link>
                        {pathname === authPaths[0] && <Link
                            to="/login"
                            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                        >
                            ¿Ya tienes cuenta? Inicia sesión
                        </Link>}
                        {pathname === authPaths[1] && <Link
                            to="/register"
                            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                        >
                            ¿No tienes cuenta? Regístrate
                        </Link>}
                    </div>
                </div>
            </div>
        </nav>
    )

    return (
        <nav className="bg-white shadow-sm sticy top-0 z-50">
            < div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="flex justify-between h-16">
                    <Link to="/" className="flex items-center">
                        <i data-feather="briefcase" className="h-8 w-8 text-indigo-600"></i>
                        <span className="ml-2 text-xl font-bold text-gray-900 select-none">
                            FreelanceFlow
                        </span>
                    </Link>
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {paths.map((path) => (
                            <Link to={path} className={`text-gray-500 hover:text-gray-700 text-sm font-medium ${pathname === path ? "border-b-2 border-indigo-600" : ""}`}>{pathsPage[path as keyof typeof pathsPage]}</Link>
                        ))}
                    </div>
                    <Link to="/register" className="h-fit my-auto ml-4 px-4 py-2 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition">
                        Comenzar gratis
                    </Link>
                </div>
            </div >
        </nav >
    )
}