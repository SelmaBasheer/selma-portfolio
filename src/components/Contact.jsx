import { useState } from "react"
import { motion } from "framer-motion";
import contactImg from '../assets/contact.png'
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    );
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_y34khk1",
            "template_nx11uzi",
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            "jruLMBKEHZ-0dNEgQ"
        )
            .then(() => {
                setFormData({ name: "", email: "", message: "" });

                Swal.fire({
                    icon: "success",
                    title: "Message Sent 🎉",
                    text: "Thanks for reaching out! I’ll get back to you soon.",
                    confirmButtonColor: "#06b6d4",
                    background: "#0f172a",
                    color: "#fff",
                });
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong. Please try again later.",
                    confirmButtonColor: "#ef4444",
                    background: "#0f172a",
                    color: "#fff",
                });
            });

        emailjs.send(
            "service_y34khk1",
            "template_6a4fvvr",
            {
                to_name: formData.name,
                to_email: formData.email,
                message: formData.message,
            },
            "jruLMBKEHZ-0dNEgQ"
        )
    };
    return (
        <section id="contact" className="relative min-h-screen flex items-center py-20 overflow-hidden">

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex-1 relative flex items-center justify-center w-full"
                    >
                        <div className="relative w-55 md_w-100 aspect-3/4
                        flex items-center justify-center">

                            {/* Decorative Circle */}
                            <motion.div
                                className="absolute w-[90%] h-[95%] rounded-full border-4 border-cyan-500"
                                style={{
                                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                                    transform: "rotate(-10deg) scaleX(0.6)"
                                }}
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />
                            <motion.div
                                className="absolute w-[98%] h-[103%] rounded-full border-2 border-cyan-500/30"
                                style={{
                                    boxShadow: "0 0 50px dashed rgba(6, 182, 212, 0.2)",
                                    transform: "rotate(-10deg) scaleX(0.6)"
                                }}
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            ></motion.div>

                            <motion.div
                                className="absolute w-[94%] h-[99%] rounded-full"
                                style={{
                                    boxShadow: "2px dashed rgba(6, 182, 212, 0.4)",
                                    transform: "rotate(-10deg) scaleX(0.6)"
                                }}
                                animate={{
                                    rotate: [-10, 350],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear'
                                }}
                            />
                            <motion.div
                                className="relative w-[85%] h-[90%] rounded-full overflow-hidden border-4 border-white bg-cyan-400/30 dark:border-slate-600 shadow-2xl z-10"
                                style={{
                                    transform: "rotate(-5deg)",
                                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)"
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    rotate: -3,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <img src={contactImg} alt="Contact"
                                    className="w-full h-full object-cover" />
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-12 md:w-20 h-12 md:h-20 rounded-full blur-xl bg-cyan-500/20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute top-6 md:-top-10 -left-6 md:-left-10 w-20 md:w-32 h-20 md:h-32 bg-blue-500/20 rounded-full blur-xl"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.2, 0.5, 0.2]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex-1 text-center lg:text-left w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">

                                <span className="text-slate-700 dark:text-slate-300">
                                    Contact{" "}
                                </span>

                                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 [text-shadow:0_0_20px_rgba(6,182,212,0.3)]">
                                    Me
                                    <motion.span
                                        className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                    />
                                </span>

                            </h2>
                        </motion.div>
                        <motion.p
                            className="text-base md:text-lg text-slate-600 dark:text-slate-400"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}>
                            I’m open to new opportunities and collaborations. Feel free to reach out if you’d like to work together.
                        </motion.p>
                        {/* form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="w-full mt-6 md:mt-8"
                        >
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                {/* Name */}
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        required
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/50 dark:bg-slate-800/50
                                         backdrop-blur-sm border border-slate-300 dark:border-slate-700 
                                         rounded-full text-sm md:text-base text-slate-800 dark:text-white 
                                         placeholder:text-slate-500 dark:placeholder:text-slate-400 
                                         focus:outline-none focus:ring-2 focus:ring-cyan-500
                                         focus:border-transparent transition-all"
                                    />
                                </div>
                                {/* Email */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        required
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/50 dark:bg-slate-800/50
                                         backdrop-blur-sm border border-slate-300 dark:border-slate-700 
                                         rounded-full text-sm md:text-base text-slate-800 dark:text-white 
                                         placeholder:text-slate-500 dark:placeholder:text-slate-400 
                                         focus:outline-none focus:ring-2 focus:ring-cyan-500
                                         focus:border-transparent transition-all"
                                    />
                                </div>
                                {/* Message */}
                                <div>
                                    <textarea
                                        type="text"
                                        name="message"
                                        value={formData.message}
                                        required
                                        onChange={handleChange}
                                        rows={window.innerWidth < 768 ? 4 : 5}
                                        placeholder="Your Message"
                                        className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/50 dark:bg-slate-800/50
                                    backdrop-blur-sm border border-slate-300 dark:border-slate-700
                                    rounded-xl md:rounded-2xl text-sm md:text-base text-slate-800 dark:text-white
                                    placeholder:text-slate-500 dark:placeholder:text-slate-400
                                    focus:outline-none focus:ring-2 focus:ring-cyan-500
                                    focus:border-transparent transition-all resize-none"
                                    />
                                </div>
                                {/* button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    <span>Send Message</span>

                                    <FaPaperPlane className="text-sm md:text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}

export default Contact