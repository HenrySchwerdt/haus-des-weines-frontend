
import { GlobalConfig } from "payload"
export const Footer: GlobalConfig = {
    slug: 'footer',
    label: {
        en: 'Footer',
        de: 'Fußzeile'
    },
    fields: [
        {
            name: 'logo',
            label: {
                en: 'Logo',
                de: 'Logo'
            },
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'rights',
            label: {
                en: 'Rights Reserved',
                de: 'Rechte Vorbehalten'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'topNavigation',
            type: 'array',
            labels: {
                singular: {
                    en: 'Top Navigation',
                    de: 'Obere Navigation'
                },
                plural: {
                    en: 'Top Navigation',
                    de: 'Obere Navigation'
                }
            },
            fields: [
                {
                    name: 'label',
                    label: {
                        en: 'Label',
                        de: 'Label'
                    },
                    type: 'text',
                    required: true,
                    localized: true
                },
                {
                    name: 'link',
                    label: {
                        en: 'Link',
                        de: 'Link'
                    },
                    type: 'text',
                    required: true,
                    localized: true
                }
            ]
        },
        {
            name: 'bottomNavigation',
            type: 'array',
            labels: {
                singular: {
                    en: 'Bottom Navigation',
                    de: 'Untere Navigation'
                },
                plural: {
                    en: 'Bottom Navigation',
                    de: 'Untere Navigation'
                }
            },
            fields: [
                {
                    name: 'label',
                    label: {
                        en: 'Label',
                        de: 'Label'
                    },
                    type: 'text',
                    required: true,
                    localized: true
                },
                {
                    name: 'link',
                    label: {
                        en: 'Link',
                        de: 'Link'
                    },
                    type: 'text',
                    required: true,
                    localized: true
                }
            ]
        }
    ]
}