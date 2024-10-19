import { GlobalConfig } from "payload"

export const Contact: GlobalConfig = {
    slug: 'contact',
    label: {
        en: 'Contact',
        de: 'Kontakt'
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
            name: 'email_label',
            label: {
                en: 'Email Label',
                de: 'Email Label'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'email',
            label: {
                en: 'Email',
                de: 'Email'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'address_label',
            label: {
                en: 'Address Label',
                de: 'Adresse Label'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'address',
            label: {
                en: 'Address',
                de: 'Adresse'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'phone_label',
            label: {
                en: 'Phone Label',
                de: 'Telefon Label'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'phone',
            label: {
                en: 'Phone',
                de: 'Telefon'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'name_label',
            label: {
                en: 'Name Label',
                de: 'Name Label'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'message_label',
            label: {
                en: 'Message Label',
                de: 'Nachricht Label'
            },
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'send_label',
            label: {
                en: 'Send Label',
                de: 'Senden Label'
            },
            type: 'text',
            required: true,
            localized: true
        }
    ]
}