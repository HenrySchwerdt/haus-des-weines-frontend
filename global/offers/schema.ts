import { GlobalConfig } from "payload"

export const Offers: GlobalConfig = {
    slug: 'offers',
    label: {
        en: 'Offers',
        de: 'Angebote'
    },
    fields: [
        {
            name: 'offers',
            type: 'array',
            labels: {
                singular: {
                    en: 'Offer',
                    de: 'Angebot'
                },
                plural: {
                    en: 'Offers',
                    de: 'Angebote'
                }
            },
            fields: [
                {
                    name: 'name',
                    label: {
                        en: 'Offer Id',
                        de: 'Angebot Id',
                    },
                    type: 'relationship',
                    relationTo: 'offer-ids',
                    hasMany: false,
                    required: true,
                },
                {
                    name: 'html',
                    label: {
                        en: 'Html',
                        de: 'Html'
                    },
                    type: 'text',
                    required: true,
                    localized: true
                }
            ]
        }
    ]
}