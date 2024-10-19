import Image from 'next/image'
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react'
import { Event, Media } from 'payload-types'

export function UpComing({
    title,
    date,
    time,
    location,
    description,
    image
}: Event) {
    return <div className="flex flex-col md:flex-row bg-stone-100 border border-stone-200 p-6 rounded-lg shadow-sm">
        {image && (
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <Image
                    src={(image as Media).url!}
                    alt={title}
                    width={120}
                    height={120}
                    className="rounded-md object-cover"
                    unoptimized={true}
                />
            </div>
        )}
        <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-red-800">{title}</h3>
            <p className="text-stone-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-red-700" />
                    {(new Date(date)).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2 text-red-700" />
                    {time}
                </div>
                <div className="flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-2 text-red-700" />
                    {location}
                </div>
            </div>
        </div>
    </div>
}