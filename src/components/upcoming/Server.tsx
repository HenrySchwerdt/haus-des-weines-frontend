import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Event } from "payload-types"
import { UpComing } from '../common/UpComing';
import { Divider } from '../common/Divider';

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
    const bestFiveEvents = getBestFiveEvents(events);

    if (!bestFiveEvents || bestFiveEvents.length === 0) {
        return <></>
    }

    return <section className="py-10 lg:px-14 px-4 md:px-6">
        <div id="events" className="mx-auto">
            <h2 className="font-bold text-2xl md:text-3xl font-vollkorn mb-4">Kommende Veranstaltungen</h2>
            <div className="space-y-6 mt-8">
                {bestFiveEvents.map((event) => (<UpComing key={event.id} {...event}></UpComing>))}
            </div>
        </div>
    </section>
}