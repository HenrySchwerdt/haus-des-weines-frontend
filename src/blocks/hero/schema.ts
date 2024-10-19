import { Block } from "payload";
import { Image } from "../image/schema";
import { OpeningHours } from "../opening-hours/schema";

export const Hero: Block = {
    slug: 'hero',
    labels: {
        singular: {
            en: 'Hero-Section',
            de: 'Hero-Section',
        },
        plural: {
            en: 'Hero-Sections',
            de: 'Hero-Sections',
        }
    },
    fields: [
        {
            name: 'backgroundImage',
            type: 'blocks',
            blocks: [Image]
        },
        {
            name: 'slogan',
            type: 'blocks',
            blocks: [Image]
        },
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
            name: 'subtitle',
            type: 'textarea',
            label: {
                en: 'Subtitle',
                de: 'Untertitel',
            },
            required: true,
            localized: true,
        },
        {
            name: 'openingHours',
            label: {
                en: 'Opening Hours',
                de: 'Öffnungszeiten',
            },
            type: 'blocks',
            blocks: [OpeningHours]
        }
    ]
}