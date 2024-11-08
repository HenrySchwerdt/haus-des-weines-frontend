import { CollectionConfig } from "payload";
export const OfferIds: CollectionConfig = {
    slug: 'offer-ids',
    labels: {
        singular: {
            en: 'Offer Id',
            de: 'Angebot Id',
        },
        plural: {
            en: 'Offer Ids',
            de: 'Angebot Ids',
        }
    },
    admin: {
        group: {
            en: 'Offers',
            de: 'Angebote',
        },
        useAsTitle: 'offerId',
    },
    fields: [
        {
            name: 'offerId',
            type: 'text',
            label: {
                en: 'Offer Id',
                de: 'Angebot Id',
            },
            admin: {
                placeholder: {
                    en: 'Enter Id here',
                    de: 'Id hier eingeben',
                }
            },
            required: true,
        },
    ]

}