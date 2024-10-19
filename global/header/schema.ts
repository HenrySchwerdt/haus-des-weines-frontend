
import { GlobalConfig } from "payload"
export const Header: GlobalConfig = {
    slug: 'header',
    label: {
        en: 'Header',
        de: 'Kopfzeile'
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
            name: 'navigation',
            type: 'array',
            labels: {
                singular: {
                    en: 'Navigation',
                    de: 'Navigation'
                },
                plural: {
                    en: 'Navigation',
                    de: 'Navigation'
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