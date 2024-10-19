import { Block } from "payload";

export const ActionButton: Block = {
    slug: 'action',
    labels: {
        singular: {
            en: 'Action',
            de: 'Aktion',
        },
        plural: {
            en: 'Actions',
            de: 'Aktionen',
        }
    },
    fields: [
        {
            name: 'label',
            type: 'text',
            label: {
                en: 'Label',
                de: 'Label',
            },
            required: true,
            localized: true,
        },
        {
            name: 'url',
            type: 'text',
            label: {
                en: 'Url',
                de: 'Url',
            },
            required: true,
            localized: true,
        }
    ]
}