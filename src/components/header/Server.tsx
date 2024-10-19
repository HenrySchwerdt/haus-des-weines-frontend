import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { HeaderComponent } from './Header'

export default async function HeaderServer() {
    const payload = await getPayloadHMR({
        config,
    })

    const header = await payload.findGlobal({
        slug: 'header',
    })
    return <HeaderComponent id={header.id} logo={(header.logo)} navigation={header.navigation} />
}