import { MenuGroup } from '@/components/menu/MenuGroup';
import { MenuNotice } from '@/components/menu/MenuNotice';
import { SmallMenuItem } from '@/components/menu/SmallMenuItem';
import { WineMenuItem } from '@/components/menu/WineMenuItem';
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { MenuType } from 'payload-types';
export const dynamic = "force-dynamic";
export default async function Menu() {
    const payload = await getPayloadHMR({
        config,
    })

    const winesDocs = await payload.find({
        collection: 'wine',
    })
    const normalDocs = await payload.find({
        collection: 'normal-item',
    })

    const wines = winesDocs.docs;
    const normalItems = normalDocs.docs;

    if (!wines.length && !normalItems.length) {
        return <div className='mx-auto'>No items found</div>
    }

    return (<div className='mx-auto'><MenuGroup title={(wines[0].type! as MenuType).name}>
        {wines.map((wine) => (
            <WineMenuItem key={wine.id} {...wine} />
        ))}


    </MenuGroup>
        <MenuGroup title={(normalItems[0].type! as MenuType).name}>
            {normalItems.map((item) => (
                <SmallMenuItem key={item.id} {...item} />
            ))}
        </MenuGroup>
        <MenuNotice />
    </div>
    )
}