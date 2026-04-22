import { motion } from "framer-motion";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">

            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />

            <div className="container mx-auto px-4 py-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Left Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-600 dark:text-slate-400 text-sm"
                    >
                        © {currentYear} Selma's Portfolio. All rights reserved.
                    </motion.p>

                    {/* Right Text (optional) */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex text-slate-600 dark:text-slate-400 text-sm flex items-center gap-1"
                    >
                        Made with <FaHeart className="text-cyan-500" /> by Selma
                    </motion.p>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-3"
                    >
                        {[
                            { Icon: FaGithub, href: "https://github.com/SelmaBasheer/" },
                            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/selma-b-088ab3171/" }
                        ].map(({ Icon, href }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                whileHover={{ y: -3, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                            >
                                <Icon size={14} />
                            </motion.a>
                        ))}
                    </motion.div>

                </div>
                <motion.div
                    className="flex justify-center gap-2 mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1.5 h-1.5 justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                                duration: 1.5,
                                delay: i * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>
            </div>

        </footer>
    )
}

export default Footer