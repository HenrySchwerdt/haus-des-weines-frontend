import { Booking } from '@/components/booking/Booking';
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { OfferId } from 'payload-types';
export const dynamic = "force-dynamic";
const Page = async ({
    params: { locale, id },

}: {
    params: { locale: string, id: string }
}) => {
    const lang: 'de' | 'en' = locale === 'en' ? 'en' : 'de';
    const payload = await getPayloadHMR({
        config,
    })
    const offers = await payload.findGlobal({
        slug: 'offers',
        locale: lang
    })
    const offer = offers?.offers?.filter(offer => (offer.name as OfferId).offerId === id).map(offer => offer.html);
    if (!offer) {
        return <>No Offer could be found.</>
    }

    return (
        <div>
            <Booking value={offer.join()} lang={lang} />
        </div>
    );
}

export default Page