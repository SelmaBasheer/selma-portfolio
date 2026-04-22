import { useState } from "react"
import CakeHutImg from '../assets/CakeHutBanner.png'
import VillaVistaImg from '../assets/VillaVistaBanner.png'
import PortfolioImg from '../assets/PortfolioBanner.png'
import ToDoAppImg from '../assets/ToDoAppImg.png'
import NetflixImg from '../assets/NetflixBanner.png'
import OlxImg from '../assets/OlxBanner.png'
import { motion } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const projects = [
        {
            id: 1,
            title: 'CakeHut E-Commerce',
            category: 'Full-Stack',
            img: CakeHutImg,
            tech: ['C#',
                'ASP.NET Core',
                'SQL Server',
                'PayPal']
        },
        {
            id: 2,
            title: 'VillaVista BookingPlatform',
            category: 'Full-Stack',
            img: VillaVistaImg,
            tech: ['C#',
                'ASP.NET Core',
                'SQL Server',
                'PayPal']
        },
        {
            id: 3,
            title: 'Portfolio Website',
            category: 'Frontend',
            img: PortfolioImg,
            tech: ['React',
                'Tailwind CSS',
                'Framer Motion',
                'Git']
        },
        {
            id: 4,
            title: 'To-Do App',
            category: 'Frontend',
            img: ToDoAppImg,
            tech: ['React',
                'Tailwind CSS',
                'Git']
        },
        {
            id: 5,
            title: 'Netflix Clone',
            category: 'Frontend',
            img: NetflixImg,
            tech: ['React',
                'Tailwind CSS',
                'Git']
        },
        {
            id: 6,
            title: 'Marketplace (OLX Clone)',
            category: 'Frontend',
            img: OlxImg,
            tech: ['React',
                'Tailwind',
                'FireBase',
                'Flowbite']
        },
    ];

    const nextSlide = () => {
        setCurrentIndex(
            prev => prev + itemsPerPage >= projects.length ? 0 : prev + itemsPerPage
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prev => prev - itemsPerPage < 0
            ? Math.max(0, projects.length - itemsPerPage)
            : prev - itemsPerPage
        );
    }


    return (
        <section id="work" className="relative py-14 overflow-hidden">
            <div className="container mx-auto px-4">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-4xl font-bold text-center mb-16"
                >
                    <span className="text-slate-700 dark:text-slate-300">
                        My{" "}
                    </span>

                    <span className="relative inline-block text-transparent 
                    bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400
                        [text-Shadow: 0_0_20px_rgba(6, 182, 212, 0.3)]"
                    >
                        Personal Projects

                        <motion.span
                            className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        />
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects
                        .slice(currentIndex, currentIndex + itemsPerPage)
                        .map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <div className="bg-white dark:bg-slate-800 rounded-2xl
                 overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">

                                    {/* Project content goes here */}
                                    <div className="relative overflow-hidden h-56">
                                        <img src={project.img} alt={project.title}
                                            className="w-full h-full object-cover
                       group-hover:scale-110 transitio-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/90 
                                        to-blue-500/90 flex items-center justify-center gap-4 opacity-0 
                                        group-hover:opacity-100 transition-opacity duration-300">

                                            {/* GitHub Link */}
                                            <a
                                                href="#"
                                                className="p-3 bg-white rounded-full text-slate-700 
                                                hover:text-cyan-500 transition-colors"
                                            >
                                                <FaGithub size={24} />
                                            </a>

                                            {/* Live Demo Link */}
                                            <a
                                                href="#"
                                                className="p-3 bg-white rounded-full text-slate-700 
                                                hover:text-blue-500 transition-colors"
                                            >
                                                <FaExternalLinkAlt size={20} />
                                            </a>
                                        </div>

                                        {/* Category Badge */}
                                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 
                                            backdrop-blur-sm rounded-full text-sm font-semibold 
                                            text-transparent bg-clip-text bg-gradient-to-r 
                                            from-cyan-500 to-blue-500">
                                            {project.category}
                                        </span>

                                    </div>
                                    <div className="p-6">

                                        <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                                            {project.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-2">

                                            {project.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 text-xs rounded-full bg-gradient-to-r 
                                                        from-cyan-50 to-blue-50 dark:from-cyan-500/10 
                                                        text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20"
                                                >
                                                    {t}
                                                </span>
                                            ))}

                                        </div>

                                    </div>
                                </div>

                            </motion.div>
                        ))
                    }

                </div>
                <div className="flex justify-center gap-3 mt-10">

                    {[0, 1].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index * itemsPerPage)}
                            className={`h-3 rounded-full transition-all duration-300
                                 ${Math.floor(currentIndex / itemsPerPage) === index
                                    ? "w-10 bg-gradient-to-r from-cyan-500 to-blue-500"
                                    : "w-3 bg-slate-300 dark:bg-slate-600"
                                }`}
                        />
                    ))}

                </div>
                <div className="flex justify-center gap-4 mb-2">

                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg text-cyan-500 
                        hover:text-blue-500 border border-cyan-500/20 "
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg 
                        text-cyan-500 hover:text-blue-500 border border-cyan-500/20 "
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Work