'use client'

import { useState } from 'react'
import { CalendarDays, Clock, MapPin, Image as ImageIcon, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Event, Media } from 'payload-types'
import { de } from 'payload/i18n/de'


export default function EventCard({
    title,
    date,
    time,
    location,
    description,
    reservation,
    image,
    lang
}: Event & {
    lang: 'en' | 'de'
}) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 w-full">
            {/* <div className="relative">
                {image && (
                    <div className="aspect-[16/9] relative overflow-hidden">
                        <Image
                            src={(image as Media).url!}
                            alt={title}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            fill
                        />
                    </div>
                )}
            </div> */}
            <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 text-rouge">{title}</h2>
                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                        <CalendarDays className="h-4 w-4 flex-shrink-0 text-rouge" />
                        <span className="truncate">{(new Date(date)).toLocaleDateString(lang)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 flex-shrink-0 text-[#9B2C2C]" />
                        <span className="truncate">{time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 flex-shrink-0 text-[#9B2C2C]" />
                        <span className="truncate">{location}</span>
                    </div>
                </div>
                {description.length <= 100 && <p className="text-sm">{description}</p>}
                {description.length > 100 && <div className='flex flex-col items-start'>
                    {isExpanded ? description : `${description.slice(0, 300) + "..."}`}
                    <Button
                        variant="ghost"
                        className="p-0 h-auto text-[#9B2C2C] hover:text-[#742121]"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? (
                            <>
                                Weniger anzeigen
                                <ChevronUp className="ml-2 h-4 w-4" />
                            </>
                        ) : (
                            <>
                                Mehr anzeigen
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </div>
                }

            </CardContent>
            {reservation && (
                <CardFooter className="p-4 sm:p-6 pt-0">
                    <Button asChild className="w-full bg-[#9B2C2C] hover:bg-[#742121] text-white transition-colors duration-300">
                        <a href={`mailto:wiesbaden@haus-des-weines.de`}>{lang == 'en' ? 'Reserve here' : 'Hier reservieren'}</a>
                    </Button>
                </CardFooter>
            )}
        </Card>
    )
}