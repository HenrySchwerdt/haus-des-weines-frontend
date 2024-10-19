import { CollectionConfig } from "payload";

export const EventItem: CollectionConfig = {
    slug: 'event',
    labels: {
        singular: {
            en: 'Event',
            de: 'Event',
        },
        plural: {
            en: 'Events',
            de: 'Events',
        }
    },
    admin: {
        group: {
            en: 'Event',
            de: 'Event',
        }
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: {
                en: 'Title',
                de: 'Titel',
            },
            admin: {
                placeholder: {
                    en: 'Enter the title here',
                    de: 'Titel hier eingeben',
                }
            },
            required: true,
            localized: true,
        },
        {
            name: 'date',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                }
            },
            required: true,
        },
        {
            name: 'time',
            type: 'text',
            label: {
                en: 'Time',
                de: 'Zeit',
            },
            admin: {
                placeholder: {
                    en: 'Enter the time here',
                    de: 'Zeit hier eingeben',
                }
            },
            required: true,
            localized: true,
        },
        {
            name: 'location',
            type: 'text',
            label: {
                en: 'Location',
                de: 'Ort',
            },
            admin: {
                placeholder: {
                    en: 'Enter the location here',
                    de: 'Ort hier eingeben',
                }
            },
            required: true,
            localized: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: {
                en: 'Description',
                de: 'Beschreibung',
            },
            admin: {
                placeholder: {
                    en: 'Enter the description here',
                    de: 'Beschreibung hier eingeben',
                }
            },
            localized: true,
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'recurring',
            type: 'checkbox',
            label: {
                en: 'Recurring',
                de: 'Wiederkehrend',
            },
            required: true,
        }
    ]
}