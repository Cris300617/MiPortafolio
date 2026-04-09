import styled from "styled-components";
import image from "./assets/Perfil.png";
import loginsoft from "./assets/loginSoft.png";
import homesoft from "./assets/homeSoft.png";
import usersoft from "./assets/userSoft.png";
import cine1 from "./assets/cine1.png";
import cine2 from "./assets/cine2.png";
import cine3 from "./assets/cine3.png";
import cine4 from "./assets/cine4.png";
import cine5 from "./assets/cine5.png";
import cine6 from "./assets/cine6.png";
import cinepolis2 from "./assets/cinepolis2.png";
import defontana from "./assets/defontana.png";
import pares2 from "./assets/pares2.png";
import reportsoft from "./assets/reportSoft.png";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Portafolio() {
  const [activo, setActivo] = useState(null);
  const reporteImgs = [loginsoft, homesoft, reportsoft, usersoft];
  const cineImgs = [cine1, cine2, cine3, cine4, cine5, cine6];

  const [imgReporte, setImgReporte] = useState(0);
  const [imgCine, setImgCine] = useState(0);


  const toggleCard = (nombre) => {
    setActivo(activo === nombre ? null : nombre);
  };

  return (
    <Container>
      <HeaderCard>
        <div className="perfil">
          <div className="foto">
            <img src={image} alt="perfil" />
          </div>

          <div className="info-perfil">
            <h1>Cristóbal Felipe Picarte Yáñez</h1>
            <h2>Data Analyst & Software Developer</h2>

            <div className="datos">
              <p>
                <span>📧</span> cristobalpicarteyanez@gmail.com
              </p>
            </div>

            <div className="botones">
              <a href="/cv.pdf" download="CV_Cristobal_Picarte.pdf">
  <button>Descargar PDF</button>
</a>


            </div>
          </div>
        </div>
      </HeaderCard>

      <RedesCard>
        <div className="botones-sociales">

          <div
            className={`flip-card ${activo === "github" ? "active" : ""}`}
            onClick={() => toggleCard("github")}
          >
            <div className="flip-inner">
              <div className="flip-front">
                <Icon icon="fluent-mdl2:git-hub-logo" className="icon-grande" />
                <h3>GitHub</h3>
              </div>

              <div className="flip-back">
                <Icon icon="fluent-mdl2:git-hub-logo" className="icon-chico" />
                <p>Visita mi GitHub</p>
                <a href="https://github.com/Cris300617" target="_blank" rel="noreferrer">
                  Ir →
                </a>
              </div>
            </div>
          </div>

          <div
            className={`flip-card ${activo === "linkedin" ? "active" : ""}`}
            onClick={() => toggleCard("linkedin")}
          >
            <div className="flip-inner">
              <div className="flip-front">
                <Icon icon="skill-icons:linkedin" className="icon-grande" />
                <h3>LinkedIn</h3>
              </div>

              <div className="flip-back">
                <Icon icon="skill-icons:linkedin" className="icon-chico" />
                <p>Visita mi LinkedIn</p>
                <a href="https://www.linkedin.com/in/crist%C3%B3bal-felipe-picarte-y%C3%A1%C3%B1ez-1b964838b/" target="_blank" rel="noreferrer">
                  Ir →
                </a>
              </div>
            </div>
          </div>

          <div
            className={`flip-card ${activo === "instagram" ? "active" : ""}`}
            onClick={() => toggleCard("instagram")}
          >
            <div className="flip-inner">
              <div className="flip-front">
                <Icon icon="skill-icons:instagram" className="icon-grande" />
                <h3>Instagram</h3>
              </div>

              <div className="flip-back">
                <Icon icon="skill-icons:instagram" className="icon-chico" />
                <p>Visita mi Instagram</p>
                <a href="https://www.instagram.com/dimesielva/" target="_blank" rel="noreferrer">
                  Ir →
                </a>
              </div>
            </div>
          </div>

        </div>
      </RedesCard>

      <PerfilProfesionalCard>
        <div className="titulo">
            <h1>Perfil Profesional</h1>
            <p>Mi enfoque y experiencia en el área informática</p>
        </div>

        <div className="contenido">
            <p>
              Ingeniero Civil Informático con enfoque en <span>análisis de datos</span> y <span>desarrollo de software</span>. 
              Experiencia en <span>extracción, limpieza y visualización de datos</span> utilizando herramientas como 
              <span>Python (Pandas)</span>, <span>SQL</span> y <span>Power BI</span>, además de desarrollo de aplicaciones con 
              <span>React</span>, <span>JavaScript</span> y <span>Angular</span>.
              </p>

              <p>
              Me especializo en transformar datos en <span>insights accionables</span> para la toma de decisiones, 
              así como en el desarrollo de soluciones tecnológicas eficientes. 
              Cuento con experiencia en <span>automatización de procesos</span>, integración de APIs y construcción de 
              <span> dashboards interactivos</span>.
            </p>

            <div className="habilidades">
            <span><Icon icon="iconoir:developer" className="icon-chico" /> Front End</span>
            <span><Icon icon="streamline-plump-color:cog-automation" className="icon-chico" /> Automatización</span>
            <span> <Icon icon="devicon:react" className="icon-chico" /> React</span>
            <span><Icon icon="devicon:react" className="icon-chico" /> React Native</span>
            <span><Icon icon="devicon:angular" className="icon-chico" /> Angular</span>
            <span><Icon icon="devicon:javascript" className="icon-chico" /> JavaScript</span>
            <span><Icon icon="devicon:python" className="icon-chico" /> Python</span>
            <span><Icon icon="devicon:java" className="icon-chico" /> Java</span>
            <span><Icon icon="devicon:react" className="icon-chico" /> C#</span>
            <span><Icon icon="devicon:unrealengine" className="icon-chico" /> Unreal Engine 5</span>
            <span><Icon icon="hugeicons:office-365" className="icon-chico" /> Microsoft Office 365</span>
            <span><Icon icon="icon-park:thinking-problem" className="icon-chico" /> Resolución de Problemas</span>
            <span><Icon icon="mdi:database" className="icon-chico" /> SQL</span>
            <span><Icon icon="logos:power-bi" className="icon-chico" /> Power BI</span>
            <span><Icon icon="simple-icons:pandas" className="icon-chico" /> Pandas</span>
            <span><Icon icon="mdi:chart-line" className="icon-chico" /> Data Analysis</span>
            <span><Icon icon="mdi:api" className="icon-chico" /> APIs</span>
            </div>
        </div>
    </PerfilProfesionalCard>


            <ProyectosCard>
                <div className="titulo-proyectos">
                <h1>Mis Proyectos</h1>
                <p>Algunos de los sistemas y aplicaciones que he desarrollado</p>
                </div>

                <div className="grid-proyectos">

                {/* Proyecto 1 */}
                <ProyectoBox>
                    <h2>Software de Reportabilidad</h2>

                    <div className="slider">
                    <button
                        className="btn-slider"
                        onClick={() => setImgReporte((prev) => (prev === 0 ? reporteImgs.length - 1 : prev - 1))}
                    >
                        ◀
                    </button>

                    <img src={reporteImgs[imgReporte]} alt="proyecto reportabilidad" />

                    <button
                        className="btn-slider"
                        onClick={() => setImgReporte((prev) => (prev === reporteImgs.length - 1 ? 0 : prev + 1))}
                    >
                        ▶
                    </button>
                    </div>

                    <div className="puntos">
                    {reporteImgs.map((_, index) => (
                        <span
                        key={index}
                        className={imgReporte === index ? "activo" : ""}
                        ></span>
                    ))}
                    </div>

                    <div className="descripcion">
                    <p>
                        Sistema para crear, editar y visualizar reportes y gestionar información de manera eficiente.
                    </p>
                    </div>

                    <a className="btn-proyecto" href="https://pya-project.vercel.app/login" target="_blank" rel="noreferrer">
                    Ver Proyecto →
                    </a>
                </ProyectoBox>

                {/* Proyecto 2 */}
                <ProyectoBox>
                    <h2>App Móvil Gestión de Cines</h2>

                    <div className="slider">
                    <button
                        className="btn-slider"
                        onClick={() => setImgCine((prev) => (prev === 0 ? cineImgs.length - 1 : prev - 1))}
                    >
                        ◀
                    </button>

                    <img src={cineImgs[imgCine]} alt="proyecto cine" />

                    <button
                        className="btn-slider"
                        onClick={() => setImgCine((prev) => (prev === cineImgs.length - 1 ? 0 : prev + 1))}
                    >
                        ▶
                    </button>
                    </div>

                    <div className="puntos">
                    {cineImgs.map((_, index) => (
                        <span
                        key={index}
                        className={imgCine === index ? "activo" : ""}
                        ></span>
                    ))}
                    </div>

                    <div className="descripcion">
                    <p>
                      Aplicación móvil para gestión de operaciones en cine, incluyendo 
                      <span> manejo de datos</span>, automatización de tareas y optimización de procesos.
                    </p>
                    </div>

                    <a className="btn-proyecto" href="https://github.com/Cris300617/Proyecto_Cine" target="_blank" rel="noreferrer">
                    Ver Proyecto →
                    </a>
                </ProyectoBox>

                </div>
            </ProyectosCard>

            <EmpresasBar>
                <h1>Empresas en las que he colaborado</h1>

                <div className="logos">
                    <div className="logo-box">
                    <img src={defontana} alt="Defontana" />
                    </div>

                    <div className="logo-box">
                    <img src={pares2} alt="Pares" />
                    </div>

                    <div className="logo-box">
                    <img src={cinepolis2} alt="Cinepolis" />
                    </div>
                </div>
            </EmpresasBar>





    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 40px;

  background: linear-gradient(135deg, #0f172a, #111827, #1e293b);
  font-family: "Poppins", sans-serif;
`;

const RedesCard = styled.div`
  width: 100%;
  max-width: 1000px;

  display: flex;
  justify-content: center;

  .botones-sociales {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
  }

  .flip-card {
    width: 260px;
    height: 180px;
    cursor: pointer;
    perspective: 1000px;
  }

  .flip-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s ease;
  }

  .flip-card.active .flip-inner {
    transform: rotateY(180deg);
  }

  .flip-front,
  .flip-back {
    width: 100%;
    height: 100%;
    border-radius: 20px;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 12px;

    backface-visibility: hidden;

    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);

    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.45);

    transition: 0.3s ease;
  }

  .flip-front:hover {
    transform: translateY(-6px);
    border: 1px solid rgba(59, 246, 121, 0.6);
    box-shadow: 0px 10px 35px rgba(59, 246, 121, 0.25);
  }

  .flip-front h3 {
    color: white;
    font-size: 1.4rem;
    margin: 0;
    font-weight: 600;
  }

  .flip-back {
    transform: rotateY(180deg);
    text-align: center;
    padding: 15px;
  }

  .flip-back p {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1rem;
    margin: 0;
  }

  .flip-back a {
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: rgba(59, 246, 121, 0.9);

    padding: 10px 18px;
    border-radius: 12px;
    border: 1px solid rgba(59, 246, 121, 0.6);

    transition: 0.3s ease;
  }

  .flip-back a:hover {
    background: rgba(59, 246, 121, 0.2);
    transform: scale(1.05);
  }

  .icon-grande {
    font-size: 4rem;
  }

  .icon-chico {
    font-size: 2.2rem;
  }
`;

const PerfilProfesionalCard = styled.div`
  width: 100%;
  max-width: 1100px;

  padding: 40px;
  border-radius: 25px;

  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);

  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.45);

  display: flex;
  flex-direction: column;
  gap: 25px;

  .titulo {
    text-align: center;
    color: white;
  }

  .titulo h1 {
    font-size: 2.3rem;
    margin: 0;
    font-weight: 700;
  }

  .titulo p {
    margin-top: 10px;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .contenido {
    display: flex;
    flex-direction: column;
    gap: 15px;

    color: rgba(255, 255, 255, 0.85);
    font-size: 1.05rem;
    line-height: 1.8rem;

    text-align: justify;
  }

  .contenido span {
    color: rgba(59, 246, 121, 0.95);
    font-weight: 600;
  }

  .habilidades {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  .habilidades span {
    padding: 10px 14px;
    border-radius: 14px;

    font-size: 0.95rem;
    font-weight: 600;

    background: rgba(59, 246, 121, 0.15);
    border: 1px solid rgba(59, 246, 121, 0.4);
    color: rgba(255, 255, 255, 0.9);

    transition: 0.3s ease;
  }

  .habilidades span:hover {
    background: rgba(59, 246, 121, 0.25);
    transform: translateY(-4px);
    box-shadow: 0px 6px 18px rgba(59, 246, 121, 0.15);
  }

  @media (max-width: 850px) {
    padding: 30px;

    .titulo h1 {
      font-size: 2rem;
    }

    .contenido {
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
`;


const HeaderCard = styled.div`
  width: 100%;
  max-width: 1000px;

  padding: 40px;
  border-radius: 25px;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);

  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);

  .perfil {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .foto {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    overflow: hidden;

    border: 3px solid rgba(59, 246, 121, 0.8);
    box-shadow: 0px 0px 25px rgba(59, 130, 246, 0.4);

    transition: 0.3s ease;
  }

  .foto:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 35px rgba(59, 246, 121, 0.8);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info-perfil {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: white;
  }

  h1 {
    font-size: 2.3rem;
    font-weight: 700;
    margin: 0;
    color: #ffffff;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0;
    color: rgba(255, 255, 255, 0.75);
  }

  .datos {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .datos p {
    font-size: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.85);
  }

  .datos span {
    font-size: 1.2rem;
  }

  .botones {
    margin-top: 20px;
    display: flex;
    gap: 15px;
  }

  .botones button {
    padding: 12px 20px;
    border-radius: 12px;
    border: none;
    cursor: pointer;

    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;

    transition: 0.3s ease;

    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .botones button:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-3px);
  }

  @media (max-width: 850px) {
    padding: 30px;

    .perfil {
      flex-direction: column;
      text-align: center;
    }

    .botones {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

const ProyectosCard = styled.div`
  width: 100%;
  max-width: 1100px;

  padding: 35px;
  border-radius: 25px;

  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);

  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.45);

  display: flex;
  flex-direction: column;
  gap: 30px;

  .titulo-proyectos {
    text-align: center;
    color: white;
  }

  .titulo-proyectos h1 {
    font-size: 2.4rem;
    margin: 0;
    font-weight: 700;
  }

  .titulo-proyectos p {
    margin-top: 10px;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .grid-proyectos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }

  @media (max-width: 900px) {
    .grid-proyectos {
      grid-template-columns: 1fr;
    }
  }
`;

const ProyectoBox = styled.div`
  padding: 25px;
  border-radius: 22px;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border: 1px solid rgba(59, 246, 121, 0.45);
    box-shadow: 0px 10px 35px rgba(59, 246, 121, 0.18);
  }

  h2 {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    font-weight: 600;
  }

  .slider {
    width: 100%;
    height: 260px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 15px;
    position: relative;
  }

  .slider img {
  width: 100%;
  max-width: 360px;
  height: 220px;

  border-radius: 18px;

  object-fit: contain; 
  background: rgba(255, 255, 255, 0.08); 
  padding: 10px; 

  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.45);

  transition: 0.3s ease;
}


  .btn-slider {
    width: 45px;
    height: 45px;
    border-radius: 50%;

    border: none;
    cursor: pointer;

    font-size: 1.1rem;
    font-weight: 700;

    background: rgba(255, 255, 255, 0.12);
    color: white;

    border: 1px solid rgba(255, 255, 255, 0.18);

    transition: 0.3s ease;
  }

  .btn-slider:hover {
    background: rgba(59, 246, 121, 0.18);
    border: 1px solid rgba(59, 246, 121, 0.5);
    transform: scale(1.1);
  }

  .puntos {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  .puntos span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    transition: 0.3s ease;
  }

  .puntos span.activo {
    background: rgba(59, 246, 121, 0.9);
    box-shadow: 0px 0px 10px rgba(59, 246, 121, 0.6);
    transform: scale(1.2);
  }

  .descripcion {
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    line-height: 1.4rem;
  }

  .btn-proyecto {
    margin-top: 10px;
    text-decoration: none;

    padding: 12px 18px;
    border-radius: 14px;

    font-weight: 600;
    font-size: 1rem;

    color: white;
    background: rgba(59, 246, 121, 0.2);

    border: 1px solid rgba(59, 246, 121, 0.5);

    transition: 0.3s ease;
  }

  .btn-proyecto:hover {
    background: rgba(59, 246, 121, 0.35);
    transform: translateY(-4px);
  }
`;

const EmpresasBar = styled.div`
  width: 100%;
  max-width: 1100px;

  padding: 35px;
  border-radius: 25px;

  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.45);

  display: flex;
  flex-direction: column;
  gap: 25px;

  h1 {
    margin: 0;
    text-align: center;
    color: white;
    font-size: 2rem;
    font-weight: 700;
  }

  .logos {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 35px;
    flex-wrap: wrap;
  }

  .logo-box {
    width: 240px;
    height: 110px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;

    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);

    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);

    transition: 0.3s ease;
  }

  .logo-box:hover {
    transform: translateY(-6px) scale(1.05);
    border: 1px solid rgba(59, 246, 121, 0.5);
    box-shadow: 0px 10px 30px rgba(59, 246, 121, 0.25);
  }

  .logo-box img {
    width: 75%;
    height: 75%;
    object-fit: contain;


  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.6rem;
    }

    .logo-box {
      width: 200px;
      height: 95px;
    }
  }
`;




