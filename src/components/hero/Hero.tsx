'use client'

import { useEffect } from 'react'
import { motion, useAnimate, stagger, AnimationSequence } from 'framer-motion'
import Image from 'next/image'
import { Divider } from '../common/Divider'
import { Hero, Media } from 'payload-types'

export default function HeroClient({ hero }: { hero: Hero }) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const sequence: AnimationSequence = [
            [
                'section',
                { opacity: [0, 1] },
                { duration: 0.5 }
            ],
            [
                ['.hero-content > *', '.hero-hours > *', '.hero-buttons > *', '.hero-text > *'],
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.5, delay: stagger(0.1) }
            ]
        ]

        animate(sequence)
    }, [animate])

    return (
        <motion.section
            ref={scope}
            initial={{ opacity: 0 }}
        >
            <div className="w-full relative h-[640px]">
                <Image
                    src={(hero.backgroundImage as Media).url!}
                    alt="Hero image"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                    className="filter brightness-25 md:brightness-50 lg:brightness-70"
                    unoptimized={true}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center max-w-[520px] mx-auto px-4 md:px-0 md:mx-20 hero-content">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={(hero.sloganImage as Media).url!}
                            alt="Slogan"
                            width={400}
                            height={250}
                            style={{ objectFit: 'scale-down' }}
                            quality={100}
                            unoptimized={true}
                        />
                    </motion.div>
                    <div className="mt-4 w-full">
                        <Divider bgColor="bg-red-300" />
                    </div>

                    <div className="w-full text-center md:text-left mt-8 hero-hours">
                        <h1 className="text-white font-bold text-2xl md:text-4xl font-vollkorn">
                            {hero.openingHours![0].title.toLocaleUpperCase()}
                        </h1>
                        <p className="text-white font-julius text-lg md:text-2xl mt-4">
                            {hero.openingHours &&
                                hero.openingHours[0].list &&
                                hero.openingHours![0].list?.map((item, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="text-rouge mr-2">{item.timespan}</span>
                                        {item.hours}
                                        {index < hero.openingHours![0].list!.length - 1 ? <br /> : ''}
                                    </motion.span>
                                ))}
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:justify-start mt-14 hero-buttons">
                        {hero.primary && hero.primary[0] && (
                            <motion.div

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href={hero.primary[0].url} className="font-julius w-full md:w-36 py-2 text-center border rounded-md text-white block md:inline-block">
                                    {hero.primary[0].label}
                                </a>
                            </motion.div>
                        )}
                        {hero.secondary && hero.secondary[0] && (
                            <motion.div

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href={hero.secondary[0].url} className="font-julius w-full md:w-36 py-2 text-center border rounded-md text-white block md:inline-block">
                                    {hero.secondary[0].label}
                                </a>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            <div className="font-vollkorn lg:px-14 px-4 md:px-6 text-xl mt-4 md:mt-8 lg:mt-12 hero-text">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {hero.heading}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {hero.subheading}
                </motion.div>
                <div className="mt-10">


                    <motion.div

                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <Divider bgColor="bg-rouge" />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}