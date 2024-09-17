import React from 'react';

// Datos exportados
export const skills = [
  { skill: "JavaScript", percentage: 80 },
  { skill: "TypeScript", percentage: 70 },
  { skill: "Node.js", percentage: 75 },
  { skill: "React.js", percentage: 85 },
  { skill: "HTML & CSS", percentage: 85 },
  { skill: "Bootstrap", percentage: 80 },
  { skill: "SQL & NoSQL Databases", percentage: 70 },
  { skill: "API Integration", percentage: 75 },
];

export const experiences = [
  { title: "Diplomado en Desarrollo Back End - Nivel Intermedio", institution: "Universidad Distrital Francisco Jose De Caldas", certificationDate: "Agosto de 2023", durationHours: 125 },
  { title: "Diplomado en Repositorio de Software", institution: "Universidad Distrital Francisco Jose De Caldas", certificationDate: "Agosto de 2023", durationHours: 48 },
  { title: "Diplomado en Fundamentos de Programación Frontend", institution: "Universidad Distrital Francisco Jose De Caldas", certificationDate: "Agosto de 2023", durationHours: 48 },
  { title: "Diplomado en Programación TypeScript y JavaScript", institution: "Universidad Distrital Francisco Jose De Caldas", certificationDate: "Agosto de 2023", durationHours: 48 },
  { title: "Diplomado en Programación con Énfasis en Desarrollo Web", institution: "Universidad Tecnológica de Pereira", certificationDate: "Diciembre de 2022", durationHours: 320 },
  { title: "Diplomado en Habilidades para los Negocios", institution: "Universidad San Buenaventura", certificationDate: "Diciembre de 2020", durationHours: 320 },
];

export const projects = [
  { name: "Galería de Imágenes de Juegos de Game Pass", description: "Desarrollé una galería de imágenes para juegos disponibles en Game Pass utilizando React.", image: "gamepassgallery.png" },
  { name: "Aplicación de Solicitudes a una API", description: "Creé una aplicación web que realiza solicitudes a una API externa y muestra los resultados de manera dinámica.", image: "apirequestsapp.png" },
  { name: "Blog Personal", description: "Desarrollé un blog personal con Next.js, permitiendo la publicación de contenido mediante Markdown.", image: "personalblog.png" },
  { name: "Portfolio Personal", description: "Diseñé y desarrollé mi portfolio personal utilizando HTML, CSS y JavaScript.", image: "personalportfolio.png" },
];

export const posts = [
  { title: "React", content: "React es una biblioteca de JavaScript para construir interfaces de usuario.", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faie.edu.au%2Fwp-content%2Fuploads%2F2018%2F03%2Fgame-programming-03.jpg" },
  { title: "Angular", content: "Angular es un framework de desarrollo web front-end basado en TypeScript.", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faie.edu.au%2Fwp-content%2Fuploads%2F2018%2F03%2Fgame-programming-03.jpg" },
  { title: "Next.js", content: "Next.js es un framework de desarrollo web que permite la creación de aplicaciones React.", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faie.edu.au%2Fwp-content%2Fuploads%2F2018%2F03%2Fgame-programming-03.jpg" },
];

// Componente React para la página de perfil
const Profile = () => {
  return (
    <div>
      <h1>Perfil</h1>
      
      <section>
        <h2>Habilidades</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.skill} - {skill.percentage}%</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Experiencia</h2>
        <ul>
          {experiences.map((experience, index) => (
            <li key={index}>
              <h3>{experience.title}</h3>
              <p>{experience.institution} - Certificado: {experience.certificationDate}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Proyectos</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Posts</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

// Exportación por defecto del componente
export default Profile;
