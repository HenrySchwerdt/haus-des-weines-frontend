import { Divider } from '@/components/common/Divider';
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
export default async function DataPrivacy({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const payload = await getPayloadHMR({
        config,
    })
    const lang: 'de' | 'en' = locale === 'en' ? 'en' : 'de';
    const privacy = await payload.findGlobal({
        slug: 'privacy',
        locale: lang,
    })
    if (!privacy || !privacy.title || !privacy.content_html) {
        return <div className='mx-auto'>No items found</div>
    }
    return (
        <div className='flex w-full justify-center items-center'>
            <div className='max-w-[1200px] w-full md:w-[800px]'>
                <h1 className='text-2xl my-3 font-vollkorn font-bold'>{privacy.title}</h1>
                <Divider bgColor='bg-rouge' />
                <div className='font-vollkorn mt-2' dangerouslySetInnerHTML={{ __html: privacy.content_html! }}>
                </div>
            </div>
        </div>
    )
}