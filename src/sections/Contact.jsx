import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jonathan",
          from_email: form.email,
          to_email: "jonathanbc2012@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      alert("Email enviado, ¡gracias!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.log("Error en la llamada a EmailJS:", error);
      alert("Hubo un error, intenta de nuevo");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 h-full z-0"
        />
        <div className="relative contact-container p-6 md:p-12 sm:p-16">
          <h3 className="head-text">Hablemos</h3>
          <p className="text-lg text-white-600 mt-3 max-w-3xl w-full z-10">
            Si te gusta este portfolio y te interesa mi trabajo, no dudes en
            ponerte en contacto conmigo. ¡Siempre estoy dispuesto a ayudar!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Nombre y apellidos</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Escribe tu nombre completo..."
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Correo electrónico</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Escribe tu dirección de correo electrónico..."
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Tu mensaje</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hola, me gustaría ofrecerte un trabajo..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
