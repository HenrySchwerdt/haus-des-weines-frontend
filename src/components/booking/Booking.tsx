"use client";
import Script from 'next/script';
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';

interface Props {
    value: string
}
export function Booking({ value }: Props) {
    const [consent, setConsent] = useState(false);
    const srcMatch = value.match(/<script[^>]*src="([^"]*)"/);
    const src = srcMatch ? srcMatch[1] : undefined;
    return (
        <div>
            {!consent && <div className='h-screen flex items-center justify-center w-full'>
                <Card className='max-w-[600px]'>
                    <CardHeader>
                        <h2 className="text-2xl font-bold leading-tight text-rouge">Disclaimer</h2>
                    </CardHeader>
                    <CardContent className='font-julius'>
                        Wir verwenden externe Medien, um Ihnen zusätzliche Informationen zu bieten.
                        Wenn Sie externe Medien akzeptieren, können personenbezogene Daten an Drittanbieter übertragen werden.
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => { setConsent(true) }} className='bg-rouge hover:bg-rouge/90 text-white'>Akzeptieren</Button>
                    </CardFooter>
                </Card>
            </div>}
            {consent && <><div dangerouslySetInnerHTML={{ __html: value }} /><Script src={src} /></>}
        </div>
    )

}