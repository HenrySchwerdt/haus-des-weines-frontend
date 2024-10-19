import { GlobalConfig } from "payload"

export const About: GlobalConfig = {
    slug: 'about',
    label: {
        en: 'About',
        de: 'Über uns'
    },
    fields: [
        {
            name: 'title',
            label: {
                en: 'Title',
                de: 'Titel'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'paragraph1',
            label: {
                en: 'Paragraph 1',
                de: 'Absatz 1'
            },
            type: 'textarea',
            required: true,
            localized: true
        },
        {
            name: 'paragraph2',
            label: {
                en: 'Paragraph 2',
                de: 'Absatz 2'
            },
            type: 'textarea',
            required: true,
            localized: true
        },
        {
            name: 'paragraph3',
            label: {
                en: 'Paragraph 3',
                de: 'Absatz 3'
            },
            type: 'textarea',
            required: true,
            localized: true
        },

        {
            name: 'fotos',
            label: {
                en: 'Photos',
                de: 'Fotos'
            },
            type: 'upload',
            relationTo: 'media',
            required: true
        },
    ]
}