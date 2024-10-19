import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Media } from 'payload-types';
import { Divider } from '../common/Divider';
import Image from 'next/image';

export async function EventRoomServer() {
    const payload = await getPayloadHMR({
        config,
    });

    const eventRoom = await payload.findGlobal({
        slug: 'event-room',
    });

    return (
        <div className="lg:px-14 px-4 md:px-6 relative bg-rouge">
            <div className="w-6 h-6 bg-rouge z-1 transform rotate-45 -translate-x-1/2 absolute left-1/2 -top-3"></div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 h-full py-8 md:py-10 gap-5 md:gap-20">
                <div className="flex flex-col justify-center items-start md:col-span-2">
                    <h1 className="font-bold text-2xl md:text-4xl font-vollkorn text-white">{eventRoom.title}</h1>
                    <p className="text-white font-julius text-xl md:text-2xl mt-4">
                        {eventRoom.description}
                    </p>
                    <Divider bgColor="bg-red-300 my-4 max-w-[600px]" />
                    <div className="flex flex-col md:flex-row justify-between pt-4 gap-10">
                        <div>
                            <h3 className="font-bold text-xl font-vollkorn text-white">Ausstattung</h3>
                            <ul className="text-white font-julius text-lg mt-4">
                                {eventRoom.interior && eventRoom.interior.map((item, index) => (
                                    <li key={index}>{item.item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:justify-start mt-10">
                        <a className="font-julius w-full md:w-36 py-2 text-center border rounded-md text-white block md:inline-block" href="/#contact">Anfragen</a>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start md:col-span-1 mt-4 md:mt-0">
                    <Carousel opts={{
                        align: "start",
                        loop: true,
                    }}>
                        <CarouselContent>
                            {eventRoom.fotos && eventRoom.fotos.map((image, index) => (
                                <CarouselItem key={index} className="relative w-full h-64 md:h-[600px]">
                                    <Image
                                        src={(image.photo as Media).url!}
                                        fill={true} // Keep fill
                                        alt='Event Room Image'
                                        className='rounded-md object-cover object-center'
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Ensure this is set for performance
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
