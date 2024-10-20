import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Divider } from '../common/Divider';
import Image from 'next/image';
import { Hero, Media } from 'payload-types';


export default async function HeroServer({ lang }: { lang: 'en' | 'de' }) {
    const payload = await getPayloadHMR({
        config,
    })

    const hero: Hero = await payload.findGlobal({
        slug: 'hero',
        locale: lang
    })

    return (
        <section id='hero'>
            <div className='w-full relative h-[640px]'>
                <Image src={(hero.backgroundImage as Media).url!} alt='Hero image' fill style={{ objectFit: 'cover', objectPosition: 'center' }} unoptimized={true} priority className="filter brightness-25 md:brightness-50 lg:brightness-70" />
                <div className='absolute inset-0 flex flex-col justify-center items-center max-w-[520px] mx-auto px-4 md:px-0  md:mx-20'>
                    <Image src={(hero.sloganImage as Media).url!} alt='Slogan' width={400} height={250} style={{ objectFit: 'scale-down' }} unoptimized={true} quality={100} />
                    <div className='mt-4 w-full'>
                        <Divider bgColor="bg-red-300" />
                    </div>

                    <div className='w-full text-center md:text-left mt-8'>
                        <h1 className='text-white font-bold text-2xl md:text-4xl font-vollkorn'>{hero.openingHours![0].title.toLocaleUpperCase()}</h1>
                        <p className='text-white font-julius text-lg md:text-2xl mt-4'>
                            {hero.openingHours && hero.openingHours[0].list && hero.openingHours![0].list?.map((item, index) => (
                                <>
                                    <span key={index} className='text-rouge mr-2'>{item.timespan}</span>
                                    {item.hours}
                                    {index < hero.openingHours![0].list!.length - 1 ? <br /> : ''}
                                </>
                            ))}
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 w-full md:justify-start mt-14'>
                        {hero.primary && hero.primary[0] && <a className='font-julius w-full md:w-36 py-2 text-center border rounded-md text-white block md:inline-block' href={hero.primary[0].url}>{hero.primary[0].label}</a>}
                        {hero.secondary && hero.secondary[0] && <a className='font-julius w-full md:w-36 py-2 text-center border rounded-md text-white block md:inline-block' href={hero.secondary[0].url}>{hero.secondary[0].label}</a>}
                    </div>
                </div>
            </div>

            <div className='font-vollkorn lg:px-14 px-4 md:px-6 text-xl mt-4 md:mt-8 lg:mt-12'>
                <div className='py-5'>
                    {hero.heading}
                </div>

                {hero.subheading}
                <div className='mt-10'>
                    <Divider bgColor='bg-rouge' />
                </div>
            </div>
        </section>
    );

}