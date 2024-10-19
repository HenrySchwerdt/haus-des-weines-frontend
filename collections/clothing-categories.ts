import { CollectionConfig } from "payload";

export const ClothingCategories: CollectionConfig = {
    slug: 'clothing-categories',
    labels: {
        singular: {
            en: 'Clothing Category',
            de: 'Kleidung Kategorie',
        },
        plural: {
            en: 'Clothing Categories',
            de: 'Kleidung Kategorien',
        }
    },
    admin: {
        group: {
            en: 'Clothing',
            de: 'Kleidung',
        }
    },
    fields: [
        {
            name: 'category',
            type: 'text',
            label: {
                en: 'Category',
                de: 'Kategorie',
            },
            required: true,
            localized: true,
        },
    ],
}
