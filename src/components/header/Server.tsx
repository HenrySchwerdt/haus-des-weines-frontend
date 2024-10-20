import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { HeaderComponent } from './Header'

export default async function HeaderServer({ lang }: { lang: 'en' | 'de' }) {
    const payload = await getPayloadHMR({
        config,
    })

    const header = await payload.findGlobal({
        slug: 'header',
        locale: lang,
    })
    return <HeaderComponent id={header.id} logo={(header.logo)} navigation={header.navigation} />
}