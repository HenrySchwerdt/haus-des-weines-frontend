import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Event } from "payload-types";
import UpcomingCard from './UpcomingCard';
import UpComingCardWithoutImage from './UpcomingCardWithoutImage';

function getBestFiveEvents(events: Event[]): Event[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayDayOfWeek = today.getDay();


    const eventsFromTodayOrClosestInFuture = events.map(event => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);

        if (event.recurring) {
            const eventDayOfWeek = eventDate.getDay();

            if (eventDayOfWeek >= todayDayOfWeek) {
                eventDate.setDate(today.getDate() + (eventDayOfWeek - todayDayOfWeek));
            } else {
                eventDate.setDate(today.getDate() + (7 - (todayDayOfWeek - eventDayOfWeek)));
            }

            return { ...event, date: eventDate.toDateString() };
        }

        return event;
    }).filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today;
    });

    eventsFromTodayOrClosestInFuture.sort((a, b) => {
        const aDate = new Date(a.date).setHours(0, 0, 0, 0);
        const bDate = new Date(b.date).setHours(0, 0, 0, 0);
        return aDate - bDate;
    });

    return eventsFromTodayOrClosestInFuture.slice(0, 5);
}

export default async function UpComingServer({ lang }: { lang: 'en' | 'de' }) {
    const payload = await getPayloadHMR({
        config,
    })

    const eventDocs = await payload.find({
        collection: 'event',
        locale: lang,
        pagination: false,
    })
    if (!eventDocs.docs) {
        return <></>
    }
    const events: Event[] = eventDocs.docs;
    const bestFiveEvents = getBestFiveEvents(events).filter(event => event.image != null);

    const recurringEvents = events.filter(event => event.recurring).sort((a, b) => {
        const aDate = new Date(a.date).getDay();
        const bDate = new Date(b.date).getDay();
        if (aDate === bDate) {
            return a.time > b.time ? 1 : -1;
        }
        return aDate - bDate
    });

    if (!bestFiveEvents || bestFiveEvents.length === 0) {
        return <></>
    }

    return <section className="py-10 lg:px-14 px-4 md:px-6">
        <div id="events" className="mx-auto">
            <h2 className="font-bold text-2xl md:text-3xl font-vollkorn mb-4">Kommende Veranstaltungen</h2>
            <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-4'>
                {bestFiveEvents.map((event, index) => (<UpcomingCard key={index} {...event} lang={lang} />))}
            </div>
            <h2 className="font-bold text-2xl md:text-3xl font-vollkorn my-4">Regelmäßige Veranstaltungen</h2>
            <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-4'>
                {recurringEvents.map((event, index) => (<UpComingCardWithoutImage key={index} {...event} lang={lang} />))}
            </div>
        </div>
    </section>
}