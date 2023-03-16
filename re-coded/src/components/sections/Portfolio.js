import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 80 },
  };

  const textVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -80 },
  };

  const [projects, setProjects] = useState([
    {
      category: ["Backend"],
      github: "https://github.com/FrontFelix/projektarbete-backend",
      image: "./backend1.png",
    },
    {
      category: ["Frontend", "Backend"],
      github: "https://github.com/FrontFelix/slutprojekt-jsf",
      image: "./fullstack1.png",
    },
    {
      category: ["Frontend", "Backend"],
      github: "none",
      image: "./fullstack2.PNG",
    },
    {
      category: ["Frontend"],
      github: "none",
      image: "./frontend2.png",
    },
    {
      category: ["Frontend"],
      github: "none",
      image: "./frontend3.png",
    },
    {
      category: ["Frontend"],
      github: "none",
      image: "./frontend4.png",
    },
    {
      category: ["Frontend"],
      github: "none",
      image: "./frontend5.png",
    },
  ]);
  const frontendProjects = projects.filter((project) =>
    project.category.includes("Frontend")
  );
  const backendProjects = projects.filter((project) =>
    project.category.includes("Backend")
  );
  const fullstackProjects = projects.filter(
    (project) =>
      project.category.includes("Frontend") &&
      project.category.includes("Backend")
  );
  const [category, setCategory] = useState("all");
  return (
    <div className="background-lines min-h-screen flex flex-col justify-center">
      <div className="container-small-width w-full text-left text-white py-10 px-8 lg:px-0">
        <motion.h1
          variants={textVariants}
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.3 }}
          ref={ref}
          className="text-3xl"
        >
          Skapande
        </motion.h1>
        <motion.p
          variants={textVariants}
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Klicka på bilderna för att besöka GitHub och se mer!
        </motion.p>
        <div className="filter-buttons flex gap-6 my-4">
          <motion.button
            variants={textVariants}
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={
              category === "all"
                ? "bg-darker-primary py-1 px-4 text-center rounded text-white"
                : "text-center rounded py-1 px-4"
            }
            onClick={() => setCategory("all")}
          >
            Alla
          </motion.button>
          <motion.button
            variants={textVariants}
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.22 }}
            className={
              category === "frontend"
                ? "bg-darker-primary py-1 px-4 text-center rounded text-white"
                : "text-center rounded py-1 px-4"
            }
            onClick={() => setCategory("frontend")}
          >
            Frontend
          </motion.button>
          <motion.button
            variants={textVariants}
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.24 }}
            className={
              category === "backend"
                ? "bg-darker-primary py-1 px-4 text-center rounded text-white"
                : "text-center rounded py-1 px-4"
            }
            onClick={() => setCategory("backend")}
          >
            Backend
          </motion.button>
          <motion.button
            variants={textVariants}
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.26 }}
            className={
              category === "fullstack"
                ? "bg-darker-primary py-1 px-4 text-center rounded text-white"
                : "text-center rounded py-1 px-4"
            }
            onClick={() => setCategory("fullstack")}
          >
            Fullstack
          </motion.button>
        </div>
        <AnimatePresence mode="wait">
          {category === "all" && (
            <motion.div
              transition={{ duration: 0.2 }}
              key="all"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              className="flex flex-wrap gap-4 my-4"
            >
              {projects.map((project, index) => (
                <motion.div
                  variants={variants}
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                  className="project-box flex flex-col gap-2"
                >
                  {project.github === "none" ? (
                    <div className="image-pointer-block">
                      <img className="object-cover" src={project.image} />
                    </div>
                  ) : (
                    <a
                      className={
                        project.github === "none" ? "image-pointer-block" : ""
                      }
                      href={project.github}
                      target="_blank"
                    >
                      <img className="object-cover" src={project.image} />
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
          {category === "frontend" && (
            <motion.div
              transition={{ duration: 0.2 }}
              key="frontend"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              className="flex flex-wrap gap-4 my-4"
            >
              {frontendProjects.map((project) => (
                <div className="project-box flex flex-col gap-2">
                  {project.github === "none" ? (
                    <div className="image-pointer-block">
                      <img className="object-cover" src={project.image} />
                    </div>
                  ) : (
                    <a
                      className={
                        project.github === "none" ? "image-pointer-block" : ""
                      }
                      href={project.github}
                      target="_blank"
                    >
                      <img className="object-cover" src={project.image} />
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
          {category === "backend" && (
            <motion.div
              transition={{ duration: 0.2 }}
              key="backend"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              className="flex flex-wrap gap-4 my-4"
            >
              {backendProjects.map((project) => (
                <div className="project-box flex flex-col gap-2">
                  {project.github === "none" ? (
                    <div className="image-pointer-block">
                      <img className="object-cover" src={project.image} />
                    </div>
                  ) : (
                    <a
                      className={
                        project.github === "none" ? "image-pointer-block" : ""
                      }
                      href={project.github}
                      target="_blank"
                    >
                      <img className="object-cover" src={project.image} />
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
          {category === "fullstack" && (
            <motion.div
              transition={{ duration: 0.2 }}
              key="fullstack"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              className="flex flex-wrap gap-4 my-4"
            >
              {fullstackProjects.map((project) => (
                <div className="project-box flex flex-col gap-2">
                  {project.github === "none" ? (
                    <div className="image-pointer-block">
                      <img className="object-cover" src={project.image} />
                    </div>
                  ) : (
                    <a
                      className={
                        project.github === "none" ? "image-pointer-block" : ""
                      }
                      href={project.github}
                      target="_blank"
                    >
                      <img className="object-cover" src={project.image} />
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
