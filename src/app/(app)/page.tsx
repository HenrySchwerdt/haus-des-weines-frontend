
import React from 'react'
import HeroServer from '@/components/hero/Server'
import UpComingServer from '@/components/upcoming/Server'
import { EventRoomServer } from '@/components/event-room/Server'
import { AboutServer } from '@/components/about/Server'
import { ContactServer } from '@/components/contact/Server'
export const dynamic = "force-dynamic";
const Page = async () => {
  return (
    <>
      <HeroServer />
      <UpComingServer />
      <EventRoomServer />
      <AboutServer />
      <ContactServer />
    </>
  )
}

export default Page
