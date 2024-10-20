"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation"; // To get locale from params

type Language = {
    code: string;
    name: string;
};

const languages: Language[] = [
    { code: "de", name: "Deutsch" },
    { code: "en", name: "English" },
];

export default function LanguageSwitch() {
    const router = useRouter();
    const pathName = usePathname();
    const params = useParams();

    const currentLocale = params?.locale || "de";

    const currentLanguage = languages.find(
        (lang) => lang.code === currentLocale
    ) || languages[0];

    const handleLanguageChange = (language: Language) => {
        if (language.code !== currentLocale) {
            const newPathname = `/${language.code}${pathName.replace(`/${currentLocale}`, "")}`;
            router.push(newPathname);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-burgundy hover:text-burgundy/80 hover:bg-burgundy/10 transition-colors"
                >
                    <Globe className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium uppercase">
                        {currentLanguage.code}
                    </span>
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className="flex items-center justify-between"
                    >
                        <span
                            className={`text-sm ${currentLanguage.code === language.code ? "font-semibold" : ""}`}
                        >
                            {language.name}
                        </span>
                        {currentLanguage.code === language.code && (
                            <span className="h-2 w-2 rounded-full bg-burgundy" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
