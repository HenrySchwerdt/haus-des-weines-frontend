import { BasePayload } from "payload";
import { Hero, Media } from "payload-types";





export default async function init(payload: BasePayload): Promise<void> {
    initHeader(payload).then((id) => {
        initFooter(payload, id);
    }).then(() => {
        console.log('init header and footer done');
    }).catch((err) => {
        console.error(err);
    });

    await initHero(payload);
    await initEventRooms(payload);
    await initAbout(payload);
    await initContact(payload);
}


const initHero = async (payload: BasePayload): Promise<void> => {
    if (!payload) return;
    console.log('init hero');
    const hero: Hero = await payload.findGlobal({
        slug: 'hero',
    })
    if (hero.openingHours && hero.openingHours.length > 0) return;
    if (hero.primary && hero.primary.length > 0) return;
    if (hero.heading && hero.heading.length > 0) return;
    if (hero.subheading && hero.subheading.length > 0) return;
    const backgroundImageId = await uploadImage(payload, 'public/hero.webp', "hero-image");
    const sloganWhite = await uploadImage(payload, 'public/slogan_w.png', "slogan-white");


    await payload.updateGlobal({
        slug: 'hero',
        publishSpecificLocale: "de",
        data: {
            backgroundImage: backgroundImageId.id,
            sloganImage: sloganWhite.id,
            openingHours: [
                {
                    blockType: "opening-hours",
                    title: "Öffnungszeiten",
                    list: [
                        {
                            timespan: "MO & DI",
                            hours: "9:00 - 18:00"
                        },
                        {
                            timespan: "MI, DO & FR",
                            hours: "9:00 - 20:00"
                        },
                        {
                            timespan: "Samstag",
                            hours: "10:00 - 16:00"
                        },
                        {
                            timespan: "Sonntag",
                            hours: "Geschlossen"
                        }
                    ]
                }
            ],
            heading: "Tauchen Sie ein in die faszinierende Welt des Weins und erleben Sie eine unvergessliche Zeit im Haus des Weins!",
            subheading: "Wir sind mehr als ein gewöhnlicher Weinladen oder eine Vinothek - unser Konzept vereint Weinliebhaber und Neulinge und bietet eine Atmosphäre, die zum Verweilen und Genießen einlädt.",
            primary: [
                {
                    blockType: "action",
                    label: "Menü",
                    url: '/menu'
                }
            ],
            secondary: [
                {
                    blockType: "action",
                    label: "Mode",
                    url: '/clothing'
                }
            ]
        }
    })

}




const initFooter = async (payload: BasePayload, logoId: number): Promise<void> => {
    if (!payload) return;
    console.log('init footer');
    const footer = await payload.findGlobal({
        slug: 'footer',
    })
    if (footer.topNavigation && footer.topNavigation.length > 0) return;
    if (footer.bottomNavigation && footer.bottomNavigation.length > 0) return;


    await payload.updateGlobal({
        slug: 'footer',
        publishSpecificLocale: "de",
        data: {
            logo: logoId,
            rights: "Alle Rechte vorbehalten.",
            topNavigation: [
                {
                    label: "Menü",
                    link: '/menu'
                },
                {
                    label: "Mode",
                    link: '/clothing'
                },
                {
                    label: "Events",
                    link: '/#events'
                },
                {
                    label: "Über uns",
                    link: '/#about'
                },
                {
                    label: "Kontakt",
                    link: '/#contact'
                }
            ],
            bottomNavigation: [
                {
                    label: "Datenschutz",
                    link: '/data-privacy'
                },
                {
                    label: "Impressum",
                    link: '/imprint'
                }
            ]
        }
    })

}



const initHeader = async (payload: BasePayload): Promise<number> => {
    if (!payload) throw new Error('Payload not found');
    console.log('init header');
    const header = await payload.findGlobal({
        slug: 'header',
    })
    if (header.navigation && header.navigation.length > 0) throw new Error('Navigation already exists');
    if (header.logo && (header.logo as Media).id) throw new Error('Logo already exists');
    const logo = await uploadImage(payload, 'public/slogan.png', "logo_slogan");
    await payload.updateGlobal({
        slug: 'header',
        locale: "de",
        data: {
            logo: logo.id,
            navigation: [
                {
                    label: "Menü",
                    link: '/menu'
                },
                {
                    label: "Mode",
                    link: '/clothing'
                },
                {
                    label: "Veranstaltungen",
                    link: '/#events'
                },
                {
                    label: "Über uns",
                    link: '/#about'
                },
                {
                    label: "Kontakt",
                    link: '/#contact'
                }
            ]
        }
    })
    return logo.id;
}

const initEventRooms = async (payload: BasePayload): Promise<void> => {
    if (!payload) return;
    console.log('init event rooms');
    const eventRooms = await payload.findGlobal({
        slug: 'event-room',
    })
    if (eventRooms.title && eventRooms.title.length > 0) return;
    if (eventRooms.description && eventRooms.description.length > 0) return;
    if (eventRooms.interior_label && eventRooms.interior_label.length > 0) return;
    await payload.updateGlobal({
        slug: 'event-room',
        locale: "de",
        data: {
            title: "Veranstaltungsräume",
            description: "Feiern Sie Ihre besonderen Momente im Haus des Weines und erleben Sie unvergessliche Stunden in unseren Veranstaltungsräumen. Ob Geburtstagsfeier, Hochzeit, Firmenevent oder Weinprobe - wir bieten Ihnen den passenden Rahmen für Ihre Veranstaltung. Kontaktieren Sie uns für weitere Informationen und Reservierungen.",
            interior_label: "Ausstattung",
            ask_label: "Anfragen",
            interior: [
                {
                    item: "Beamer"
                },
                {
                    item: "Leinwand"
                },
                {
                    item: "Soundanlage"
                },
                {
                    item: "Bestuhlung für bis zu 20 Personen"
                }
            ],
        }
    })
}

const initAbout = async (payload: BasePayload): Promise<void> => {
    if (!payload) return;
    console.log('init about');
    const about = await payload.findGlobal({
        slug: 'about',
    })
    if (about.title && about.title.length > 0) return;
    if (about.paragraph1 && about.paragraph1.length > 0) return;
    if (about.paragraph3 && about.paragraph3.length > 0) return;
    const aboutImage = await uploadImage(payload, 'public/hero.webp', "about-image");
    await payload.updateGlobal({
        slug: 'about',
        locale: "de",
        data: {
            title: "Über uns",
            paragraph1: "Das Haus des Weines ist ein Ort, an dem sich Weinliebhaber und Neulinge treffen, um die Welt des Weins zu entdecken und zu genießen.",
            paragraph2: "Unser Konzept vereint Weinladen, Vinothek und Eventlocation und bietet eine einzigartige Atmosphäre, die zum Verweilen und Genießen einlädt.",
            paragraph3: "Wir bieten eine große Auswahl an Weinen, Spirituosen und Feinkost, die Sie in unserem Ladenlokal entdecken und probieren können. Darüber hinaus veranstalten wir regelmäßig Weinproben, Verkostungen und Events, bei denen Sie die Vielfalt der Weinkultur kennenlernen und erleben können.",
            fotos: aboutImage.id,

        },

    })

}


const initContact = async (payload: BasePayload): Promise<void> => {
    if (!payload) return;
    console.log('init contact');
    const contact = await payload.findGlobal({
        slug: 'contact',
    })
    if (contact.title && contact.title.length > 0) return;
    if (contact.email && contact.email.length > 0) return;
    if (contact.address && contact.address.length > 0) return;

    await payload.updateGlobal({
        slug: 'contact',
        locale: "de",
        data: {
            title: "Kontakt",
            email_label: "Email",
            email: "info@haus-des-weines.de",
            address_label: "Adresse",
            address: "Haus des Weines, Grabenstraße 4, 65183 Wiesbaden, Deutschland",
            phone_label: "Telefon",
            phone: "0163/1774491",
            name_label: "Name",
            message_label: "Nachricht",
            send_label: "Abschicken",
        }
    })

}


const uploadImage = async (payload: BasePayload, imgPath: string, text: string): Promise<Media> => {
    const img = await payload.create({
        collection: 'media',
        filePath: imgPath,
        data: {
            text
        },
    });
    return img;
}