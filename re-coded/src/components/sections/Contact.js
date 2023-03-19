import { useRef, useState } from "react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import { motion, AnimatePresence, useInView } from "framer-motion";
export default function Contact() {
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

  return (
    <div className="container-small-width w-full text-left flex justify-between gap-8 lg:gap:0 items-center text-white flex-col lg:flex-row px-8 lg:px-8 xl:px-0">
      <div className="w-full lg:w-2/5 flex gap-5 flex-col">
        <h1 className="text-3xl font-bold">Kontakta mig!</h1>
        <p className="text-xl">
          Jag ser fram emot att höra från dig! Fyll i dina detaljer nedan och
          skicka ett meddelande till mig så återkommer jag så snart som möjligt.
          Låt oss nätverka och utforska möjligheterna tillsammans!
        </p>
        <div className="flex gap-2">
          <a>
            <AiFillLinkedin size={"2rem"} />
          </a>
          <a>
            <AiFillTwitterSquare size={"2rem"} />
          </a>
          <a>
            <AiFillGithub size={"2rem"} />
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <form className="flex flex-wrap gap-8 justify-start lg:justify-end">
          <div className="flex flex-col gap-1 w-full lg:w-1/3">
            <label>Namn</label>
            <input
              required
              placeholder="Felix B"
              className="bg-transparent contact-input outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/2">
            <label>Email address</label>
            <input
              placeholder="felixb@dev.com"
              required
              className="bg-transparent contact-input outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/3">
            <label>Företag</label>
            <input
              placeholder="Fully Studios"
              className="bg-transparent contact-input outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/2">
            <label>Telefonnummer</label>
            <input
              placeholder="+46 0736 432211"
              className="bg-transparent contact-input outline-none"
            />
          </div>
          <button type="submit" className="px-4 py-2 self-start justify-start">
            Skicka meddelande
          </button>
        </form>
      </div>
    </div>
  );
}
