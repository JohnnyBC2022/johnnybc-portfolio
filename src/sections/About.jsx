import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jonathanbc2012@gmail.com");

    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.gif"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hola, soy Jonathan</p>
              <p className="grid-subtext">
                Estoy en búsqueda de una oportunidad donde abrirme camino como
                desarrollador y aplicar mis conocimientos en frontend y backend.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Stacks principales</p>
              <p className="grid-subtext">
                En los últimos meses he puesto especialmente el foco en
                Javascript como lenguaje de Frontend con React como Framework y
                Java como lenguaje de Backend con Spring Boot.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 43.2836,
                    lng: -5.5721,
                    text: "Pola de Laviana",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Puedo trabajar de forma remota en cualquier lugar del mundo.
              </p>
              <p className="grid-subtext">
                Aunque, actualmente resido en Pola de Laviana, Asturias.
              </p>
              <a href="#contact">
                <Button name="Contactar" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Mi pasión por la programación.</p>
              <p className="grid-subtext">
              Aunque aún no cuento con experiencia profesional en el sector tecnológico, poseo una sólida trayectoria en otros ámbitos que me ha permitido desarrollar habilidades clave como la resolución de problemas, el trabajo en equipo, la adaptabilidad y la comunicación efectiva.
              <br></br>
              <br></br>
              Estas competencias son perfectamente aplicables al desarrollo de software, ya que disfruto transformando ideas en aplicaciones funcionales mediante el código. Estoy convencido/a de que mi pasión por la tecnología, mi dedicación y mi capacidad para aprender rápidamente pueden marcar la diferencia si se me da la oportunidad de demostrarlo. Estoy listo para convertir esta pasión en mi profesión y aportar valor al equipo que me dé la confianza de unirme a su proyecto.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contactar</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  jonathanbc2012@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
