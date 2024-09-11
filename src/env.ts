import 'dotenv/config' // Isso vai carregar automaticamente as variáveis do .env
import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  APP_PORT: z.string(),
})

export const env = envSchema.parse(process.env)
