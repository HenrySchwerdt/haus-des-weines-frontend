import { DataPrivacy } from "@/blocks/data-privacy/schema";
import { Hero } from "@/blocks/hero/schema";
import { Imprint } from "@/blocks/imprint/schema";
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
    slug: 'pages',
    fields: [
        {
            name: 'hero',
            type: 'blocks',
            blocks: [
                Hero
            ]
        },
        {
            name: 'data-privacy',
            type: 'blocks',
            blocks: [
                DataPrivacy
            ],
        },
        {
            name: 'imprint',
            type: 'blocks',
            blocks: [
                Imprint
            ],
        }
    ],
}