import emailjs from "@emailjs/browser";
import { useRef, useState } from "react"

const Contact = () => {

    const formRef = useRef();

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

        try {
            await emailjs
                .send(serviceId, templeteId, {
                    from_name: form.name,
                    to_name: "Shreyas",
                    from_email: form.email,
                    to_email: "shreyaspatil1311@gmail.com",
                    message: form.message
                },recieverId )

            setLoading(false)
            alert('Your message has been sent!')
            setForm({ 
                name: "", 
                email: "", 
                message: "" 
            })
        } catch (error){
            setLoading(false)
            console.log(error)
            alert('Something went wrong')
        }
    };

    return (
        <section className='c-space my-20' id="contact">
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img
                    src="/assets/terminal.png"
                    alt="terminal background"
                    className='absolute insert-0 min-h-screen'
                />
                <div className='contact-container'>
                    <h3 className='head-text'>Let&apos;s talk</h3>
                    <p className="text-lg text-[#AFB0B6] mt-3">
                        Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I&apos;m here to help.
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-7"
                    >
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                                E-mail
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                                Your message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-[#27272a] p-4 min-h-[3.5rem] rounded-lg text-lg text-[#d4d4d8] shadow-lg outline-none mt-4 resize-y placeholder-[#737373] "
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button
                            className="field-btn"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow-up"
                                className="w-2.5 h-2.5 object-contain invert brightness-0 "
                            />
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact