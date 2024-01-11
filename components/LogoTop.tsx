"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoTopProps {}

const LogoTop: React.FC<LogoTopProps> = () => {
  return (
    <>
      <motion.div className="fixed top-0 left-0 w-full z-30 flex justify-center">
        <motion.div className="h-8 w-8 relative">
          <Image
            className="block"
            src="/icons/logo.svg"
            fill={true}
            alt="Cauã - Logo"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default LogoTop;
