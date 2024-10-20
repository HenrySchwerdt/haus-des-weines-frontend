import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import ContactSection from './Contact'
export async function ContactServer({ lang }: { lang: 'en' | 'de' }) {
    const payload = await getPayloadHMR({
        config,
    })

    const contact = await payload.findGlobal({
        slug: 'contact',
    })
    return <ContactSection {...contact} locale={lang} />
}