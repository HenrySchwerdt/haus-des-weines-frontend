import { CollectionConfig } from "payload";

export const MenuType: CollectionConfig = {
    slug: 'menu-type',
    labels: {
        singular: {
            en: 'Menu Type',
            de: 'Menü Typ',
        },
        plural: {
            en: 'Menu Types',
            de: 'Menü Typen',
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
            localized: true,
        }
    ],
}
