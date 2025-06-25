import React from 'react'
import useAuth from '../hooks/useAuth';

const courses = [
  {
    title: 'n8n',
    description: 'Automatización de flujos de trabajo con n8n, la herramienta open source para integraciones.',
    link: 'https://buy.stripe.com/test_dRm00i58nbLQ1JJ0z39k401',
  },
  {
    title: 'LangChain',
    description: 'Construye aplicaciones de IA con LangChain, integrando modelos de lenguaje y datos externos.',
    link: 'https://buy.stripe.com/test_6oUfZg58ncPU1JJ6Xr9k402',
  },
  {
    title: 'ChatGPT',
    description: 'Aprende a usar y a integrar ChatGPT en tus proyectos para potenciar la interacción conversacional.',
    link: 'https://buy.stripe.com/test_28E7sKeIX7vA743a9D9k400',
  },
];

const Courses = () => {
  const { user } = useAuth();
  const displayName = user?.username || user?.name || '';
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Nuestros Cursos</h1>
      <h2 className="text-xl font-semibold mb-4 text-center">
        Hola {displayName ? `${displayName}` : ''}, Bienvenido a la pagina de cursos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.title} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="mb-4 text-gray-600 text-center">{course.description}</p>
            <button
              className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
              onClick={() => window.location.href = course.link}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses