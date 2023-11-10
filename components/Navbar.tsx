"use client";

import Link from "next/link";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { PiHandshake } from "react-icons/pi";
import { IoCarSportOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";

import { CustomButton } from ".";
import { navLinks } from "@/constants";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect } from "react";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <div className="flex gap-12">
            <Link href="/" className="flex justify-center items-center">
              <Image
                src="/logo.svg"
                width={118}
                height={18}
                className="object-contain"
                alt="Car Hub Logo"
              />
            </Link>
            <ul className="gap-x-8 text-gray-900 hidden md:flex">
              {navLinks.map(({ label, to }) => (
                <li>
                  <Link
                    key={label}
                    href={to}
                    className="text-gray-500 hover:text-primary-blue"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-blue-900 hover:bg-blue-950 text-white min-w-[130px] !hidden md:!flex"
          />

          {/* Mobile nav */}
          <div className="flex relative md:hidden">
            <HiMenu
              className="text-[1.5rem] text-gray-900 cursor-pointer"
              aria-hidden="true"
              onClick={cycleOpen}
            />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <div className="navbar-menu relative z-50">
            <div className="fixed inset-0 bg-gray-800 opacity-25" />
            <motion.aside
              className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm px-6 bg-white border-r overflow-y-hidden"
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <motion.div
                className="container h-screen"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                <div className="flex flex-col justify-between h-screen">
                  <div className="flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between pt-6 mb-[50px]">
                      <Image
                        src="/logo.svg"
                        width={100}
                        height={10}
                        className="object-contain"
                        alt="Car Hub Logo"
                      />
                      <AiOutlineClose
                        onClick={cycleOpen}
                        className="text-xl cursor-pointer"
                      />
                    </div>

                    {/* Nav links */}
                    <div className="flex flex-col gap-y-7">
                      <motion.a
                        href="/"
                        variants={itemVariants}
                        className="flex items-center group gap-x-3 font-medium text-2xl"
                      >
                        <SlPeople className="group-hover:text-primary-blue" />
                        <span className="group-hover:text-primary-blue">
                          About us
                        </span>
                      </motion.a>
                      <motion.a
                        href="/"
                        variants={itemVariants}
                        className="flex items-center group gap-x-3 font-medium text-2xl"
                      >
                        <IoCarSportOutline className="group-hover:text-primary-blue" />
                        <span className="group-hover:text-primary-blue">
                          Cars
                        </span>
                      </motion.a>
                      <motion.a
                        href="/"
                        variants={itemVariants}
                        className="flex items-center group gap-x-3 font-medium text-2xl"
                      >
                        <PiHandshake className="group-hover:text-primary-blue" />
                        <span className="group-hover:text-primary-blue">
                          Partners
                        </span>
                      </motion.a>
                      <motion.a
                        href="/"
                        variants={itemVariants}
                        className="flex items-center group gap-x-3 font-medium text-2xl"
                      >
                        <BsTelephone className="group-hover:text-primary-blue" />
                        <span className="group-hover:text-primary-blue">
                          Contact
                        </span>
                      </motion.a>
                    </div>
                  </div>
                  <motion.div variants={itemVariants}>
                    <CustomButton
                      btnType="button"
                      title="Sign In"
                      containerStyles="bg-blue-900 hover:bg-blue-950 text-white rounded-full mb-4 w-full leading"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
