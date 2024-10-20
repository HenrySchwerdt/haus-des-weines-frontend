import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";
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