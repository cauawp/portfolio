"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  mouseEnterTitle: () => void;
  mouseLeaveTitle: () => void;
}

const Hero: FC<HeroProps> = ({ mouseEnterTitle, mouseLeaveTitle }) => {
  return (
    <div className="wrapper h-screen">
      <motion.h1
        className="font-normal text-title2 flex flex-col items-center leading-[100%] m-auto w-max"
        onMouseEnter={mouseEnterTitle}
        onMouseLeave={mouseLeaveTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>Cauã Wilian,</span>
        <span> Full Stack Developer</span>
      </motion.h1>
      <div className="heroIcons flex w-max m-auto">
        <div className="flex gap-14">
          <Link href="/">
            <motion.div className="h-8 w-8 relative">
              <Image
                className="block"
                src="/icons/instagram.svg"
                fill={true}
                alt="Instagram - Ícone"
              />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div className="h-8 w-8 relative">
              <Image
                className="block"
                src="/icons/linkedin.svg"
                fill={true}
                alt="Linkedin - Ícone"
              />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div className="h-8 w-8 relative">
              <Image
                className="block"
                src="/icons/github.svg"
                fill={true}
                alt="Github - Ícone"
              />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div className="h-8 w-8 relative">
              <Image
                className="block"
                src="/icons/discord.svg"
                fill={true}
                alt="Discord - Ícone"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
