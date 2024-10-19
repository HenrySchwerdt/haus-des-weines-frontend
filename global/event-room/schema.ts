import { GlobalConfig } from "payload"

export const EventRoom: GlobalConfig = {
    slug: 'event-room',
    label: {
        en: 'Event Room',
        de: 'Event Raum'
    },
    fields: [
        {
            name: 'title',
            label: {
                en: 'Title',
                de: 'Titel'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'description',
            label: {
                en: 'Description',
                de: 'Beschreibung'
            },
            type: 'textarea',
            required: true,
            localized: true
        },
        {
            name: 'interior_label',
            label: {
                en: 'Interior Label',
                de: 'Ausstattung Label'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'interior',
            label: {
                en: 'Interior',
                de: 'Ausstattung'
            },
            type: 'array',
            fields: [
                {
                    name: 'item',
                    label: {
                        en: 'Item',
                        de: 'Gegenstand'
                    },
                    type: 'text',
                    required: true,
                    localized: true
                }
            ]
        },
        {
            name: 'ask_label',
            label: {
                en: 'Ask Label',
                de: 'Anfrage Label'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'fotos',
            label: {
                en: 'Photos',
                de: 'Fotos'
            },
            type: 'array',
            fields: [
                {
                    name: 'photo',
                    label: {
                        en: 'Photo',
                        de: 'Foto'
                    },
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                }
            ]
        },
    ]
}