import Image from "next/image"
import { Clock, MapPin, Calendar } from "lucide-react"
import { Event, Media, OfferId } from 'payload-types'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"


export default function UpcomingCard({
    title,
    date,
    time,
    location,
    description,
    reservation,
    price,
    regiondoOffer,
    image,
    lang
}: Event & {
    lang: 'en' | 'de'
}) {
    return (
        <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="p-0">
                {image && (
                    <div className="relative w-full aspect-[16/9]">
                        <Image
                            alt="Event Image"
                            className="object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            src={(image as Media).url!}
                            priority
                        />
                    </div>
                )}
            </CardHeader>
            <CardContent className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-vollkorn">
                    {title}
                </h2>
                <p className="text-gray-600 mb-6 font-julius">
                    {description.length <= 200 ? description : `${description.slice(0, 200)}...`}
                </p>
                <Separator className="my-4" />
                <div className="flex flex-col gap-6 text-gray-500">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-rouge" />
                            <span>{(new Date(date)).toLocaleDateString(lang)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-rouge" />
                            <span>{time}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-rouge" />
                        <span>{location}</span>
                    </div>
                </div>
            </CardContent>
            <Separator />
            <CardFooter className="p-6 flex items-center justify-between w-full">
                {price != null && <div className="flex flex-col">
                    {price && <span className="text-rouge text-2xl font-bold">{price}€</span>}
                </div>}
                {regiondoOffer != null ? <a href={'booking/' + (regiondoOffer as OfferId).offerId}>
                    <Button
                        aria-label="Hier buchen"
                        className="bg-[#943D5B] hover:bg-[#7D3249] text-white px-8 py-2 rounded-md transition-colors duration-300"
                    >
                        {lang == 'en' ? 'Book here' : 'Hier buchen'}
                    </Button>
                </a> : <a href={`mailto:wiesbaden@haus-des-weines.de`} className="w-full">
                    <Button
                        aria-label={lang == 'en' ? 'Reserve here' : 'Hier reservieren'}
                        className="bg-[#943D5B] hover:bg-[#7D3249] text-white px-8 py-2 rounded-md transition-colors duration-300 w-full"
                    >
                        {lang == 'en' ? 'Reserve here' : 'Hier reservieren'}
                    </Button>
                </a>}
            </CardFooter>
        </Card >
    )
}