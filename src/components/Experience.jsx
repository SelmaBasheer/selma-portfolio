import { motion } from 'framer-motion'
import experienceImg from '../assets/experience.png'

const Experience = () => {
    const experience = [
        {
            side: 'left',
            title: 'Developer II - Software Engineer',
            company: 'UST',
            desc: 'Designed and developed responsive web applications using modern frameworks. Improved application performance, integrated APIs, and followed best practices in code quality, testing, and version control.',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            side: 'left',
            title: '.NET Developer (Trainee – Project-Based Learning)',
            company: 'Brototype',
            desc: 'Worked on real-world projects using C#, ASP.NET, and SQL Server. Implemented backend logic, RESTful APIs, and database integration while following best practices in code structure, version control, and debugging.',
            color: 'from-cyan-500 to-blue-400'
        },
        {
            side: 'right',
            title: 'M.Tech, Computer Science and Engineering',
            company: 'Kerala Technological University',
            desc: 'Focused on advanced topics such as data structures, cloud computing, and AI/ML. Worked on research-oriented and practical projects, strengthening problem-solving, system design, and analytical skills.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            side: 'right',
            title: 'B.Tech, Computer Science and Engineering',
            company: 'Kerala Technological University',
            desc: 'Built a strong foundation in computer science fundamentals including data structures, algorithms, databases, and software engineering. Completed academic projects and gained hands-on experience in programming and web development.',
            color: 'from-blue-500 to-cyan-400'
        },
    ];
    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const rightItemVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section
            id="experience"
            className="relative min-h-screen flex items-center py-16 lg:py-20 overflow-hidden"
        >
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 lg:mb-16"
                >
                    <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">

                        <span className="text-slate-700 dark:text-slate-300">
                            My{" "}
                        </span>

                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 [text-shadow:0_0_20px_rgba(6,182,212,0.3)]">
                            Experience

                            <motion.span
                                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            />
                        </span>

                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
                        A journey through my academic achievements and practical experience in
                        software development and engineering.
                    </p>

                </motion.div>
                <div
                    className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16"
                >
                    {/* left side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-full lg:w-1/3 space-y-4 lg:space-y-6"
                    >
                        {experience
                            .filter((exp) => exp.side === "left")
                            .map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.02,
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="relative group"
                                >
                                    <div
                                        className={`bg-white dark:bg-slate-800/50 rounded-xl lg:rounded-2xl p-4 lg:p-5 shadow-lg border border-cyan-500/20 backdrop-blur-sm hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden`}
                                    >
                                        {/* hover glow */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                        ></div>

                                        <div className="flex items-start gap-3 lg:gap-4 
                                        relative z-10">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center 
                                                justify-between gap-2 mb-1 lg:mb-2">
                                                    <h3 className="text-base lg:text-lg font-bold 
                                                    text-slate-800 dark:text-slate-200">
                                                        {exp.title}
                                                    </h3>
                                                </div>

                                                <p className="text-sm lg:text-base text-cyan-500
                                                font-medium mb-1 lg:mb-2">
                                                    {exp.company}
                                                </p>

                                                <p className="text-xs lg:text-sm
                                                text-slate-600 dark:text-slate-400">
                                                    {exp.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </motion.div>
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex items-center justify-center 
                        w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 my-6 lg:my-0"
                    >
                        <div
                            className="relative w-full h-full
                            flex items-center justify-center">
                            <div className='relative w-full h-full'>

                                <motion.div
                                    className='relative w-full h-full overflow-hidden z-10'
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <img src={experienceImg} alt="Experience"
                                        className='w-full h-full object-cover'
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                className="absolute -bottom-3 left-1/2 transform 
                                -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-1.5 
                                rounded-full shadow-lg border border-cyan-500/30 whitespace-nowrap z-20"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <span className="text-xs sm:text-sm text-transparent bg-clip-text 
                                bg-linear-to-r from-cyan-500 to-blue-400 font-semibold">
                                    10+ Years Journey
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                    {/* right side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-full lg:w-1/3 space-y-4 lg:space-y-6"
                    >
                        {experience
                            .filter((exp) => exp.side === "right")
                            .map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={rightItemVariants}
                                    whileHover={{
                                        scale: 1.02,
                                        x: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="relative group"
                                >
                                    <div
                                        className={`bg-white dark:bg-slate-800/50 rounded-xl lg:rounded-2xl p-4 lg:p-5 shadow-lg border border-cyan-500/20 backdrop-blur-sm hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden`}
                                    >
                                        {/* hover glow */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                        ></div>

                                        <div className="flex items-start gap-3 lg:gap-4 
                                        relative z-10">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center 
                                                justify-between gap-2 mb-1 lg:mb-2">
                                                    <h3 className="text-base lg:text-lg font-bold 
                                                    text-slate-800 dark:text-slate-200">
                                                        {exp.title}
                                                    </h3>
                                                </div>

                                                <p className="text-sm lg:text-base text-cyan-500
                                                font-medium mb-1 lg:mb-2">
                                                    {exp.company}
                                                </p>

                                                <p className="text-xs lg:text-sm
                                                text-slate-600 dark:text-slate-400">
                                                    {exp.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Experience