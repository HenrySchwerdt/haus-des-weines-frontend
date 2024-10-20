import { GlobalConfig } from "payload";

export const Privacy: GlobalConfig = {
    slug: 'privacy',
    label: {
        en: 'Privacy',
        de: 'Datenschutz'
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