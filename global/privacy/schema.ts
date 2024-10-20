import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";
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
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                    ...defaultFeatures,
                    HTMLConverterFeature({}),
                ],
            }),

            localized: true,
            required: true
        },
        lexicalHTML('content', { name: 'content_html' }),
    ]
}