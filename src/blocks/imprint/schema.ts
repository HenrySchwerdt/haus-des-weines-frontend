import { Block } from "payload";

export const Imprint: Block = {
    slug: 'imprint',
    labels: {
        singular: {
            en: 'Imprint',
            de: 'Impressum',
        },
        plural: {
            en: 'Imprint',
            de: 'Impressum',
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