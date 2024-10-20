
import React from 'react'
import HeroServer from '@/components/hero/Server'
import UpComingServer from '@/components/upcoming/Server'
import { EventRoomServer } from '@/components/event-room/Server'
import { AboutServer } from '@/components/about/Server'
import { ContactServer } from '@/components/contact/Server'
export const dynamic = "force-dynamic";
const Page = async ({
  searchParams,
}: {
  searchParams: { lang?: string };
}) => {
  const lang: 'de' | 'en' = searchParams.lang === 'en' ? 'en' : 'de';
  return (
    <>
      <HeroServer lang={lang} />
      <UpComingServer lang={lang} />
      <EventRoomServer lang={lang} />
      <AboutServer lang={lang} />
      <ContactServer lang={lang} />
    </>
  )
}

export default Page
