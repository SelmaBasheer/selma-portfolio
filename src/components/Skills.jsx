import {
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJava,
    FaGitAlt,
    FaKey,
    FaExchangeAlt
} from "react-icons/fa";

import { TbBrandCSharp } from "react-icons/tb";

import {
    SiDotnet,
    SiMongodb,
    SiSpringboot,
    SiPostman,
    SiC
} from "react-icons/si";

import { motion } from "framer-motion";

const Skills = () => {

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "C#", icon: TbBrandCSharp, level: 95, color: "from-purple-500 to-indigo-500" },
                { name: "JavaScript", icon: FaJsSquare, level: 90, color: "from-yellow-400 to-yellow-600" },
                { name: "Java", icon: FaJava, level: 70, color: "from-red-500 to-orange-500" },
                { name: "C", icon: SiC, level: 70, color: "from-gray-500 to-gray-700" }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: FaReact, level: 90, color: "from-cyan-400 to-blue-500" },
                { name: "HTML", icon: FaHtml5, level: 85, color: "from-orange-500 to-red-500" },
                { name: "CSS", icon: FaCss3Alt, level: 80, color: "from-blue-500 to-indigo-500" },
                { name: "Bootstrap", icon: FaBootstrap, level: 75, color: "from-purple-600 to-indigo-600" },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: ".NET", icon: SiDotnet, level: 95, color: "from-indigo-500 to-purple-600" },
                { name: "ASP.NET Core", icon: SiDotnet, level: 90, color: "from-indigo-400 to-blue-500" },
                { name: "EF Core", icon: SiDotnet, level: 90, color: "from-blue-400 to-indigo-500" },
                { name: "Spring Boot", icon: SiSpringboot, level: 70, color: "from-green-500 to-emerald-600" }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "SQL Server", icon: SiDotnet, level: 90, color: "from-blue-600 to-indigo-700" },
                { name: "MongoDB", icon: SiMongodb, level: 60, color: "from-green-500 to-green-700" }
            ]
        },
        {
            title: "Tools & Concepts",
            skills: [
                { name: "Git", icon: FaGitAlt, level: 90, color: "from-orange-500 to-red-600" },
                { name: "Postman", icon: SiPostman, level: 85, color: "from-orange-400 to-orange-600" },
                { name: "REST APIs", icon: FaExchangeAlt, level: 90, color: "from-cyan-500 to-blue-500" },
                { name: "JWT Auth", icon: FaKey, level: 80, color: "from-purple-500 to-pink-500" }
            ]
        }
    ];

    return (
        <section id="skills" className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-slate-700 dark:text-slate-300">
                            My{" "}
                        </span>

                        <motion.span
                            className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400"
                            animate={{
                                textShadow: [
                                    "0 0 20px rgba(6, 182, 212, 0.3)",
                                    "0 0 40px rgba(6, 182, 212, 0.6)",
                                    "0 0 20px rgba(6, 182, 212, 0.3)"
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            Skills

                            <motion.span
                                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            />
                        </motion.span>
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Technologies and tools I use to design, develop, and deploy modern software applications.
                    </p>
                </motion.div>

                {/* Categories */}
                {skillCategories.map((category) => (
                    <div key={category.title} className="mb-12">

                        <h2 className="text-xl font-bold mb-6 text-cyan-500">
                            {category.title}
                        </h2>

                        <motion.div
                            className="flex flex-wrap -m-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.15 }
                                }
                            }}
                        >
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="p-4 lg:w-1/4 md:w-1/2 w-full"
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.6 }
                                        }
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="h-full p-6 rounded-2xl border border-cyan-500/20 bg-white dark:bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                                        title={`${skill.name} - ${skill.level}%`}
                                    >
                                        {/* Icon + Title */}
                                        <div className="flex items-center mb-6">
                                            <div className="w-14 h-14 rounded-xl p-3 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                                                <skill.icon className="w-6 h-6 text-cyan-500" />
                                            </div>

                                            <h3 className="text-lg font-semibold ml-4 text-slate-800 dark:text-white">
                                                {skill.name}
                                            </h3>
                                        </div>

                                        {/* Level */}
                                        <div className="mb-2 flex justify-between items-center">
                                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                                Proficiency
                                            </span>

                                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress */}
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1 }}
                                            />
                                        </div>

                                        {/* Bottom Line */}
                                        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                                            <div className="h-1 w-1/3 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70" />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default Skills;