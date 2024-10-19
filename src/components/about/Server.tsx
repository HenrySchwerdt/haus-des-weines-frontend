"use server";
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Image from 'next/image';
import { Media } from 'payload-types';
import { Divider } from '../common/Divider';

export async function AboutServer() {
    const payload = await getPayloadHMR({
        config,
    })

    const about = await payload.findGlobal({
        slug: 'about',
    })
    return (
        <section id="about" className="lg:px-14 px-4 md:px-6 relative bg-red-200">
            <div className="w-6 h-6 bg-red-200 z-1 transform rotate-45 -translate-x-1/2 absolute left-1/2 -top-3"></div>
            <div className="w-6 h-6 bg-white z-1 transform rotate-45 -translate-x-1/2 absolute left-1/2 -bottom-3"></div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 h-full py-8 md:py-10 gap-5 md:gap-20">
                {/* Image section */}
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-full h-64 md:h-[600px]"> {/* Set width to full and h-full for larger views */}
                        <Image
                            src={(about.fotos as Media).url!}
                            alt="Front"
                            fill // Use fill for responsive image
                            className="rounded-md object-cover object-center"
                            quality={100}
                        />
                    </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-center items-start md:col-span-2">
                    <h1 className="font-bold text-2xl md:text-4xl font-vollkorn">{about.title}</h1>
                    <Divider bgColor="bg-rouge" />
                    <p className="font-julius text-lg md:text-2xl mt-4 md:mt-10">{about.paragraph1}</p>
                    <p className="font-julius text-lg md:text-2xl mt-4 md:mt-10">{about.paragraph2}</p>
                    <p className="font-julius text-lg md:text-2xl mt-4 md:mt-10">{about.paragraph3}</p>
                </div>
            </div>
        </section>

    );
}
