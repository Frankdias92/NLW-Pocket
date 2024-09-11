import 'dotenv/config' // Isso vai carregar automaticamente as variáveis do .env
import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
