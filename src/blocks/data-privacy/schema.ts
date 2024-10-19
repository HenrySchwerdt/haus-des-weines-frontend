import { Block } from "payload";

export const DataPrivacy: Block = {
    slug: 'data-privacy',
    labels: {
        singular: {
            en: 'Data Privacy',
            de: 'Datenschutz',
        },
        plural: {
            en: 'Data Privacy',
            de: 'Datenschutz',
        }
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: {
                en: 'Title',
                de: 'Titel',
            },
            required: true,
            localized: true,
        },
        {
            name: 'content',
            type: 'richText',
            label: {
                en: 'Content',
                de: 'Inhalt',
            },
            required: true,
            localized: true,
        }
    ]
}