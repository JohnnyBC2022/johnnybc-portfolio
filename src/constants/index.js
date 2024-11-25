export const navLinks = [
  {
    id: 1,
    name: "Portada",
    href: "#home",
  },
  {
    id: 2,
    name: "Sobre mí",
    href: "#about",
  },
  {
    id: 3,
    name: "Proyectos",
    href: "#projects",
  },
  {
    id: 4,
    name: "Formación",
    href: "#work",
  },
  {
    id: 5,
    name: "Contacto",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "ResAI - Resume Artículos con IA",
    desc: " ResAI es una valiosa herramienta que utiliza todo el poder de OpenAI API para generar resumenes de cualquier tipo de artículo. La aplicación incluye una función del historial que permite a los usuarios guardar y recuperar resumenes anteriores. Además, permite a los usuarios compartir o almacenar fácilmente el contenido resumido copiándolo al portapapeles.",
    subdesc:
      "Desarrollada con React.js, TailwindCSS y Redux Toolkit. La aplicación utiliza las capacidades avanzadas de RTK Query para realizar solicitudes de API.",
    gitHref: "https://github.com/JohnnyBC2022/resume-articulos-ai",
    depHref: "https://resai-johnnybcode.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "CarHub - Plataforma de alquiler de vehículos",
    desc: " El sitio web CarHub muestra una presentación visualmente atractiva de los vehículos obtenidos de una API de terceros. Los usuarios pueden explorar una amplia variedad de vehículos en un formato bien diseñado con soporte de paginación y filtrado avanzado para una mejor experiencia de usuario.",
    subdesc:
      "Desarrollada con React.js, TailwindCSS y Tipos de TypeScript para proporcionar una tipificación robusta que mejora la calidad del código y el desarrollo. El sitio web está diseñado para ser visualmente agradable y adaptable, lo que garantiza una experiencia de usuario óptima en varios dispositivos.",
    gitHref: "https://github.com/JohnnyBC2022/car-showcase.git",
    depHref: "https://carhub-johnnybcode.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [2.5, -6.5, 0]
      : isMobile
      ? [5, -7, 0]
      : isTablet
      ? [5, -7, 0]
      : [9, -7.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [9, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 9, 0]
      : isTablet
      ? [-12, 9, 0]
      : [-20, 9, 0],
    targetPosition: isSmall
      ? [-5, -11, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Mentor",
    pos: "Mentor Javascript ",
    duration: "Mayo2024 - Actualidad",
    title:
      "Como parte del voluntariado de Factoría F5 he impartido conocimientos de introducción a Javascript para estudiantes de los bootcamps actuales. Estoy comprometido con la comunidad y el aprendizaje continuo.",
    icon: "/assets/javascript.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Factoría F5",
    pos: "Estudiante FullStack Developer",
    duration: "Noviembre 2023 - Abril 2024",
    title:
      "Estudiante del bootcamp de desarrollo fullstack de 850 horas en Factoría F5, donde he desarrollado habilidades tanto en la parte front-end como back-end. Como lenguajes principales de desarrollo he aprendido JavaScript y Java. Adicionalmente, he trabajado con frameworks como React y Spring Boot. También hemos adquirido una buena base para trabajar con BBDD empleando PostgreSQL y MySQL. Cabe destacar además, que he aprendido a utilizar Git y GitHub para la gestión de proyectos. Así como, herramientas de desarrollo como Visual Studio Code y Postman. Además, he adquirido una gran experiencia en la creación de diseños usando Figma.",
    icon: "/assets/java.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Dicampus S.L.",
    pos: "Redactor",
    duration: "Julio 2022 - Julio 2023",
    title:
      "Durante este periodo he trabajado definiendo proyectos audiovisuales interactivos. He generado y adaptado contenidos, especialmente para cursos de formación en distintos ámbitos. He podido manejar diversas herramientas para maquetar contenido con HTML, CSS y otras herramientas de maquetación como Articulate Rise. Adicionalmente, he aprendido a utilizar herramientas de edición como After Effects y Photosop.",
    icon: "/assets/html5.svg",
    animation: "salute",
  },
  {
    id: 4,
    name: "Dicampus S.L.",
    pos: "Estudiante Desarrollo de Productos Audiovisuales Interactivos",
    duration: "Febrero 2022 - Junio 2022",
    title:
      "Obtención del certificado de profesionalidad IMSV0209 con una duración de 540 horas en las cuales he podido aprender las bases del lenguaje de marcas HTML y CSS. Así como, introducirme en el mundo de la programación con Javascript. Adicionalmente, he podido manejar herramientas de edición como Davinci Resolve, After Effects y Photosop.",
    icon: "/assets/css.svg",
    animation: "victory",
  },
];
