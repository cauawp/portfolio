"use client";
import React, { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoaderProps {
  onLoaderComplete: () => void;
}

const logoVariants = {
  initial: { opacity: 0, scale: 0, y: 1000 },
  animate: {
    transition: { type: "spring", stiffness: 260, damping: 120 },
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: { y: -100, opacity: 0, transition: { duration: 0.5 } },
};

const textVariants = {
  initial: { opacity: 0, scale: 0, y: 1000 },
  animate: {
    transition: { type: "spring", stiffness: 260, damping: 120, delay: 1 },
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: { y: -100, opacity: 0, transition: { duration: 0.5 } },
};

const Loader: FC<LoaderProps> = ({ onLoaderComplete }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(interval);
        sessionStorage.setItem("loaderShown", "true");
        document.body.classList.remove("no-scroll");
        onLoaderComplete();
        return prevProgress;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      document.body.classList.remove("no-scroll");
    };
  }, [onLoaderComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          key="loader"
          className="loader fixed z-11111 left-0 top-0 w-full h-screen flex items-center justify-center overflow-hidden globalBg"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="loader-content h-3/4 w-[35%]">
            <div className="relative h-full w-full">
              <motion.div
                variants={logoVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full z-3 relative"
              >
                <Image
                  className="block"
                  style={{ zIndex: "-3" }}
                  src="/images/c-img_loading.png"
                  fill={true}
                  alt="Cauã - Logo"
                />
              </motion.div>
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 m-auto flex items-center justify-end z-[6]"
              >
                <h1 className="text-[4vw] w-4/6 whitespace-nowrap">
                  Cauã Wilian
                </h1>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
