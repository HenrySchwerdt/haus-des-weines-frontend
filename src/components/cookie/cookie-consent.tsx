"use client";

import CookieConsent from "react-cookie-consent";
interface Props {
    lang: 'en' | 'de';
}
export function CookieConsentClient({ lang }: Props) {
    return <CookieConsent
        location="bottom"
        buttonText={lang == 'en' ? "Accept" : "Akzeptieren"}
        cookieName="hdwCookieConsent"
        style={{ background: "#FFFFFF", borderTop: "1px solid #9C2145", color: 'black' }}
        buttonStyle={{ background: "#9C2145", fontSize: "13px", color: "white", borderRadius: "4px" }}
        expires={150}
    >
        {lang == 'en' ? "This website uses cookies to store language settings locally." : "Diese Website verwendet Cookies, um Ihre Spracheinstellung zu speichern."}
    </CookieConsent>
}