import { GlobalConfig } from "payload";

export const Imprint: GlobalConfig = {
    slug: 'imprint',
    label: {
        en: 'Imprint',
        de: 'Impressum'
    },
    fields: [
        {
            name: 'title',
            label: {
                en: 'Title',
                de: 'Titel'
            },
            type: 'text',
            localized: true,
            required: true
        },
        {
            name: 'content',
            label: {
                en: 'Content',
                de: 'Inhalt'
            },
            type: 'richText',
            localized: true,
            required: true
        }
    ]
}