import { Block } from "payload";

export const Image: Block = {
    slug: 'image',
    labels: {
        singular: {
            en: 'Image',
            de: 'Bild',
        },
        plural: {
            en: 'Images',
            de: 'Bilder',
        }
    },
    fields: [
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ]
}