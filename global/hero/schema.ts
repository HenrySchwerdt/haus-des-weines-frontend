
import { ActionButton } from "@/blocks/action-button/schema"
import { OpeningHours } from "@/blocks/opening-hours/schema"
import { GlobalConfig } from "payload"
export const Hero: GlobalConfig = {
    slug: 'hero',
    label: {
        en: 'Hero',
        de: 'Hero'
    },
    fields: [
        {
            name: 'backgroundImage',
            label: {
                en: 'Background Image',
                de: 'Hintegrundbild'
            },
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'sloganImage',
            label: {
                en: 'Slogan Image',
                de: 'Slogan Bild'
            },
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'openingHours',
            label: {
                en: 'Opening Hours',
                de: 'Öffnungszeiten'
            },
            type: 'blocks',
            blocks: [OpeningHours]
        },
        {
            name: 'heading',
            label: {
                en: 'Heading',
                de: 'Überschrift'
            },
            type: 'text',
            required: true,
        },
        {
            name: 'subheading',
            label: {
                en: 'Subheading',
                de: 'Unterüberschrift'
            },
            type: 'text',
            required: true,
        },

        {
            name: 'primary',
            label: {
                en: 'Primary Action',
                de: 'Primäre Aktion'
            },
            type: 'blocks',
            blocks: [ActionButton],
            required: true,
        },
        {
            name: 'secondary',
            label: {
                en: 'Secondary Action',
                de: 'Sekundäre Aktion'
            },
            type: 'blocks',
            blocks: [ActionButton],
            required: true,
        }
    ]
}