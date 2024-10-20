import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import { de } from 'payload/i18n/de'
import {
  AlignFeature,
  BlockquoteFeature,
  BlocksFeature,
  BoldFeature,
  ChecklistFeature,
  HeadingFeature,
  IndentFeature,
  InlineCodeFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  RelationshipFeature,
  UnorderedListFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { WineItem } from 'collections/wine-item'
import { ClothingCategories } from 'collections/clothing-categories'
import { ClothingItem } from 'collections/clothing-item'
import { FoodItem } from 'collections/food-item'
import { Header } from 'global/header/schema'
import { Footer } from 'global/footer/schema'
import { Hero } from 'global/hero/schema'
import { EventItem } from 'collections/events'
import { Producer } from 'collections/producer'
import { EventRoom } from 'global/event-room/schema'
import { About } from 'global/about/schema'
import { Contact } from 'global/contact/schema'
import { MenuType } from 'collections/menu-type'
import { NormalItem } from 'collections/normal-item'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Imprint } from 'global/imprint/schema'
import { Privacy } from 'global/privacy/schema'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor(),
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        "media": true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN!,
    }),
  ],
  globals: [
    Header,
    Hero,
    EventRoom,
    Imprint,
    Privacy,
    About,
    Contact,
    Footer,
  ],
  collections: [
    Producer,
    EventItem,
    MenuType,
    WineItem,
    NormalItem,
    FoodItem,
    ClothingCategories,
    ClothingItem,
    {
      slug: 'users',
      auth: true,
      access: {
        delete: () => false,
        update: () => false,
      },
      fields: [],
    },
    {
      slug: 'media',
      upload: true,
      fields: [
        {
          name: 'text',
          type: 'text',
        },
      ],
    },
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || ''
    }
  }),

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en, de },
  },
  localization: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
    fallback: true,
  },

  admin: {

  },
  async onInit(payload) {
    // await init(payload)
  },
  sharp,
})
