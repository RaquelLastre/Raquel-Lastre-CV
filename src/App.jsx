import { useState } from 'react'
import './App.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import foto from './Resources/foto.jpg';
import estrella from './Resources/star.png';
import esp from './InfoEs.json';
import eng from './InfoEn.json';
import { BotonTema } from './BotonTema';

function App() {
  const [idioma, setIdioma] = useState("esp");
  const datos = idioma == "esp" ? esp : eng;
  return (
    <>
      <div id='navegacion'>
        <button onClick={() => setIdioma(idioma == "esp" ? "eng" : "esp")}>{idioma == "esp" ? "ENG" : "ESP"}</button>
        <BotonTema />
        <nav>
          <a href="#cabecera">{datos.nav.uno}</a>
          <a href="#experiencia">{datos.nav.dos}</a>
          <a href="#educacion">{datos.nav.tres}</a>
          <a href="#cursos">{datos.nav.cuatro}</a>
        </nav>

      </div>

      <div id="cabecera">
        <div id='cabeceraInfo'>
          <div id='hola'>
            <img src={estrella} alt="" />
            <h1>{datos.header.greeting}</h1>
            <img src={estrella} alt="" />
          </div>
          <h2>{datos.header.title}</h2>
          <p>{datos.header.description}</p>
          <div id='botones'>
            <a href={datos.contact.linkedin} target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn </a>
            <p><i className="fa-solid fa-phone-volume"></i> {datos.contact.phone}</p>
          </div>
        </div>
        <img id='foto' src={foto} alt="Raquel" />
      </div>

      <div id='tecn'>
        <i className="fa-brands fa-html5" title={datos.skills.technologies[0]}></i>
        <i className="fa-brands fa-css3-alt" title={datos.skills.technologies[1]}></i>
        <i className="fa-brands fa-square-js" title={datos.skills.technologies[2]}></i>
        <i className="fa-brands fa-angular" title={datos.skills.technologies[3]}></i>
        <i className="fa-brands fa-react" title={datos.skills.technologies[4]}></i>
        <i className="fa-brands fa-java" title={datos.skills.technologies[5]}></i>
        <i className="fa-brands fa-node" title={datos.skills.technologies[6]}></i>
        <i className="fa-brands fa-github" title={datos.skills.technologies[7]}></i>
        <i className="fa-brands fa-slack" title={datos.skills.technologies[8]}></i>
        <i className="fa-brands fa-unity" title={datos.skills.technologies[9]}></i>
      </div>

      <div id="experiencia">
        <h1><img src={estrella} alt="" /> {datos.nav.dos}<img src={estrella} alt="" /></h1>
        <hr />
        <div id='tarjetas'>
          {datos.experience.map((exp, index) => (
            <div key={index}>
              <fieldset>
                <legend><h3>{exp.year} - {exp.title} – {exp.company}</h3></legend>
                <ul>
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </fieldset>
            </div>
          ))}
        </div>
      </div>

      <div id="proyectos">
        <h1><img src={estrella} alt="" /> {datos.nav.seis}<img src={estrella} alt="" /></h1>
        <hr />
        <div id='tarjetas'>
          {datos.proyects.map((course, index) => (
            <a key={index} href={course.url} target="_blank">{course.title}</a>
          ))}
        </div>
      </div>


      <div id="educacion">
        <h1><img src={estrella} alt="" /> {datos.nav.tres} <img src={estrella} alt="" /></h1>
        <hr />
        <div id='tarjetas'>
          {datos.education.map((edu, index) => (
            <div key={index}>
              <fieldset>
                <legend><h3>{edu.degree} </h3></legend>
                <p>{edu.year_range} – {edu.institution}</p>
                <ul>
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </fieldset>
            </div>
          ))}
        </div>
      </div>


      <div id="cursos">
        <h1><img src={estrella} alt="" /> {datos.nav.cuatro}<img src={estrella} alt="" /></h1>
        <hr />
        <div id='tarjetas'>
          {datos.courses.map((course, index) => (
            <a key={index} href={course.url} target="_blank">{course.title}</a>
          ))}
        </div>
      </div>


      <div id="intereses">
        <h1><img src={estrella} alt="" /> {datos.nav.cinco}<img src={estrella} alt="" /></h1>
        <hr />
        <div id='tarjetas'>
        <ul>
          {datos.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        </div>
      </div>

      <div id='despedida'>
        <h1><img src={estrella} alt="" />{idioma === "esp" ? "¡Muchas Gracias Por Tu Tiempo!" : "Thank You For Your Time!"}<img src={estrella} alt="" /></h1>
        <div id='botones'>
          <a href={datos.contact.linkedin} target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn </a>
          <p><i className="fa-solid fa-phone-volume"></i> {datos.contact.phone}</p>
        </div>
      </div>
    </>
  )
}

export default App
