import React from "react";

function About() {
    // Datos ficticios para el componente "Acerca de"
    const aboutData = {
        name: "John Doe",
        age: 30,
        city: "New York",
        profesion: "Software Engineer",
        descripcion: "Soy un apasionado desarrollador web con experiencia en tecnologías como React, Node.js y Bootstrap. Me encanta crear aplicaciones web creativas y funcionales para mis clientes. Fuera del trabajo, disfruto de la música, la lectura y el senderismo en la naturaleza.",
    };

    return (
        <div className="container">
            <h2>Acerca de</h2>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{aboutData.name}</h3>
                    <p className="card-text">Edad: {aboutData.age}</p>
                    <p className="card-text">Ciudad: {aboutData.city}</p>
                    <p className="card-text">Profesión: {aboutData.profesion}</p>
                    <p className="card-text">Descripción: {aboutData.descripcion}</p>
                </div>
            </div>
            
        </div>
    );
}

export default About;