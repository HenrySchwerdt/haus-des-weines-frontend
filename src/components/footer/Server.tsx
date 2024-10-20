import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Image from 'next/image';
import Link from 'next/link'
import { Media } from 'payload-types';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default async function FooterServer({ lang }: { lang: 'en' | 'de' }) {
    const payload = await getPayloadHMR({
        config,
    })

    const footer = await payload.findGlobal({
        slug: 'footer',
        locale: lang,
    })
    return <footer id="footer" className="flex flex-col gap-6 font-julius mt-20">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-0 lg:px-14 px-4 md:px-6">
            <Link href="/" className="flex gap-1 items-center">
                <Image width={150} height={10} src={(footer.logo as Media).url!} alt="" className="h-4" />
            </Link>
            <div className="flex gap-5 text-sm">
                {footer.topNavigation?.map((nav) => (<Link key={nav.id} href={nav.link}>{nav.label}</Link>))}
            </div>
            <div className="flex gap-5 md:w-[150px] justify-end">
                <Link href="/#events">
                    <FaFacebook />
                </Link>
                <Link href="/#events">
                    <FaInstagram />
                </Link>
                <Link href="/#events">
                    <FaTiktok />
                </Link>

            </div>
        </div>
        <div className="border-b border-rouge lg:px-14 px-4 md:px-6"></div>
        <div className="text-xs flex flex-col md:flex-row gap-3 items-center w-full justify-center pt-4 lg:px-14 px-4 md:px-6">
            &copy; Haus des Weines {new Date().getFullYear()}. {footer.rights}
            {footer.bottomNavigation?.map((nav) => (<Link key={nav.id} href={nav.link} className="underline">{nav.label}</Link>))}
        </div>
        <div className="h-20 bg-rouge">
        </div>
    </footer>
}