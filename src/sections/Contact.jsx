import emailjs from "@emailjs/browser";
import { useRef, useState } from "react"
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {

    const formRef = useRef();
    const { alert, showAlert, hideAlert } = useAlert();

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    };

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
    const templeteId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID
    const recieverId = import.meta.env.VITE_APP_EMAILJS_RECEIVERID

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        emailjs
      .send(
        serviceId,
        templeteId,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'sujata@jsmastery.pro',
          message: form.message,
        },
        recieverId,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
    };

    return (
        <section className=" my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img 
          src="/assets/terminal.png" 
          alt="terminal-bg" 
          className="absolute inset-0 min-h-screen contact_img" />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-[#AFB0B6] mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#27272a] p-4 min-h-[1rem] rounded-lg text-lg text-[#d4d4d8] shadow-lg outline-none mt-4 resize-y placeholder-[#737373]"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button 
              className="field-btn" 
              type="submit" 
              disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img 
                src="/assets/arrow-up.png" 
                alt="arrow-up" 
                className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
    )
}

export default Contact 