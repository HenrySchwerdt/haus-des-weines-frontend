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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Language = {
    code: string;
    name: string;
};

const languages: Language[] = [
    { code: "de", name: "Deutsch" },
    { code: "en", name: "English" },
];

export default function LanguageSwitch() {
    const params = useSearchParams()
    const pathName = usePathname()
    const router = useRouter();

    // Set the initial language based on the "lang" query parameter, defaulting to "de"
    const getInitialLanguage = (): Language => {
        const langFromQuery = params.get("lang");
        const foundLanguage = languages.find(
            (lang) => lang.code === langFromQuery
        );
        return foundLanguage || languages[0]; // Default to "de" if not found
    };

    const [currentLanguage, setCurrentLanguage] =
        React.useState<Language>(getInitialLanguage);

    const handleLanguageChange = (language: Language) => {
        setCurrentLanguage(language);

        router.push(pathName + `?lang=${language.code}`, {
            scroll: false,
        });
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
                            className={`text-sm ${currentLanguage.code === language.code ? "font-semibold" : ""
                                }`}
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
