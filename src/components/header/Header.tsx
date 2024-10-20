"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Media } from 'payload-types';
import { motion } from 'framer-motion';
import LanguageSwitch from '../common/LanguageSwitch';

export function HeaderComponent({ logo, navigation }: Header) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav id="navigation" className="pt-4 w-full lg:px-14 px-4 md:px-6 pb-4 sticky top-0 bg-white z-10 border-b-2 border-rouge font-julius">
            <div className="flex justify-between items-center">
                <Link href="/" className="font-bold flex items-center">
                    <Image
                        width={150}
                        height={10}
                        src={(logo as Media).url!}
                        alt=""
                        className="h-4"
                        unoptimized={true}
                    />
                </Link>
                <div className="sm:hidden flex gap-5 justify-center items-center">
                    <LanguageSwitch />
                    <button type='button' onClick={toggleMenu}>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </motion.svg>
                    </button>
                </div>
                {/* Desktop menu */}
                <div className="hidden sm:flex gap-5 justify-center items-center">
                    {navigation?.map((nav) => (
                        <Link key={nav.id} href={nav.link}>{nav.label}</Link>
                    ))}
                    <LanguageSwitch />
                </div>
            </div>
            {/* Dropdown menu */}
            <motion.div

                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
            >
                <div className="sm:hidden flex flex-col items-center space-y-2">
                    {navigation?.map((nav) => (
                        <Link key={nav.id} href={nav.link} onClick={closeMenu}>
                            {nav.label}
                        </Link>
                    ))}
                </div>

            </motion.div>
        </nav>
    );
}
