"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex gap-5 flex-col lg:flex-row lg:justify-between lg:items-center p-8 lg:p-0 container-small-width text-white text-left">
      <div className="flex flex-col gap-5 w-auto lg:w-auto">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
          className="text-4xl font-bold"
        >
          Teknikentusiast
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.3 },
          }}
        >
          Hej ! Jag är en 21-årig kille från Göteborg som har varit inne på
          programmeringsspåret sedan jag var 15 år. Jag har specialiserat mig på
          frontend-utveckling och har en passion för att utforska nya tekniker
          och verktyg. Min tekniska nyfikenhet och snabba inlärningsförmåga gör
          mig till en skicklig utvecklare med öga för detaljer.
        </motion.p>
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.4 },
          }}
        >
          Kontakta mig
        </motion.a>
        <div>icon icon icon</div>
      </div>
      <div className="w-auto lg:w-auto">
        <motion.img
          initial={{ x: 100, opacity: 0, borderBottom: "none" }}
          animate={{
            x: 0,
            opacity: 1,
            borderBottom: "4px solid #3b5998",
            transition: {
              duration: 0.3,
              delay: 0.7,
              borderBottom: { delay: 1.2 },
            },
          }}
          className="w-2/3 lg:w-1/2 block mx-auto lg:ml-auto rounded"
          alt="profile picture"
          src="./me.jpg"
        />
      </div>
    </div>
  );
}
