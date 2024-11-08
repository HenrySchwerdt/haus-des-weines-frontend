import { Calendar, CalendarDays, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface EventCardProps {
    title: string
    description: string
    date: string
    time: string
    location: string
    lang: 'en' | 'de'
}

export default function UpComingCardWithoutImage({
    title = "Spieleabend",
    description = "Verschiedene Brett und Kartenspiele",
    date = "21.10.2024",
    time = "15:00 - 22:00",
    location = "Haus des Weines",
    lang
}: EventCardProps) {
    return (
        <Card className="w-full max-w-sm overflow-hidden">
            <div className="p-6 flex items-center justify-center min-h-[100px] border-b bg-rouge">
                <div className="text-center space-y-2">
                    <CalendarDays className="w-12 h-12 mx-auto text-white/80" />
                    <h3 className="text-xl font-medium text-white">{new Date(date).toLocaleDateString(lang, { weekday: 'long' })}</h3>
                </div>
            </div>
            <CardHeader>
                <h2 className="text-2xl font-bold leading-tight">{title}</h2>
                <p className="text-muted-foreground">{description.length > 200 ? description.substring(0, 200) + "..." : description}</p>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-rouge" />
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground ">
                        <MapPin className="w-4 h-4 text-rouge" />
                        <span>{location}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <a href={`mailto:wiesbaden@haus-des-weines.de`} className="w-full">
                    <Button className="bg-rouge hover:bg-rouge/90 text-white w-full">
                        {lang == 'de' ? 'Hier Reservieren' : 'Reserve here'}
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}