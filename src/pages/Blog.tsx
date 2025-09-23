interface BlogPost {
    id: number;
    title: string;
    date: string;
    author: string;
    excerpt: string;
}

const dummyPosts: BlogPost[] = [
    {
        id: 1,
        title: "Cómo organizar mejor tus proyectos freelance",
        date: "15 Septiembre 2025",
        author: "Equipo FreelanceHub",
        excerpt:
            "La gestión de proyectos es clave para mantener la productividad. Te contamos algunos consejos básicos para organizar tableros, hitos y entregables...",
    },
    {
        id: 2,
        title: "Productividad: ¿vale la pena usar un timer?",
        date: "8 Septiembre 2025",
        author: "María López",
        excerpt:
            "Muchos freelancers subestiman el valor de registrar el tiempo trabajado. Aquí te mostramos cómo un timer puede ayudarte a facturar mejor y reducir distracciones...",
    },
    {
        id: 3,
        title: "Tendencias del trabajo remoto en 2025",
        date: "1 Septiembre 2025",
        author: "Carlos Ramírez",
        excerpt:
            "El trabajo remoto sigue en crecimiento. Analizamos las principales tendencias, desde herramientas colaborativas hasta nuevos modelos de contratación...",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <main className="flex-grow px-6 py-12 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Blog de FreelanceHub
                </h1>

                <p className="text-gray-600 text-center mb-12">
                    Consejos, tendencias y noticias para freelancers y equipos remotos.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {dummyPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                                {post.title}
                            </h2>
                            <p className="text-sm text-gray-500 mb-2">
                                {post.date} • {post.author}
                            </p>
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                            <a
                                href={`/blog/${post.id}`}
                                className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                            >
                                Leer más →
                            </a>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}
