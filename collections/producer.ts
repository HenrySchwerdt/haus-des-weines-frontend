import { CollectionConfig } from "payload";

export const Producer: CollectionConfig = {
    slug: 'producer',
    labels: {
        singular: {
            en: 'Producer',
            de: 'Produzent',
        },
        plural: {
            en: 'Producers',
            de: 'Produzenten',
        }
    },

    admin: {
        useAsTitle: 'name',
        group: {
            en: 'Menu',
            de: 'Menü',
        }
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: {
                en: 'Name',
                de: 'Name',
            },
            required: true,
        },
        {
            name: 'link',
            type: 'text',
            label: {
                en: 'Link',
                de: 'Link',
            },
            required: true,
        },
    ],
}