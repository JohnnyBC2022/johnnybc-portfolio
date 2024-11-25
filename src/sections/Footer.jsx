const Footer = () => {
  return (
    <footer className="c-space pt-10 pb-7 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Términos y condiciones</p>
        <p>|</p>
        <p>Política de privacidad</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/JohnnyBC2022"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github icon"
              className="w-3/4 h-3/4"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-barcar/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/linkedin.svg"
              alt="linkedin icon"
              className="w-3/4 h-3/4"
            />
          </div>
        </a>
      </div>

      <p className="text-white-500">
        © 2024 Jonathan Baragaño. Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
