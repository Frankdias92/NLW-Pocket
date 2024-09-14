import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { createCompletionRoute } from './routes/create-completion'
import { getPendingGoalsRoutes } from './routes/get-pending-goal'
import { createGoalRoute } from './routes/create-goal'
import { getWeekSummaryRoute } from './routes/get-week-summary'
import { env } from '../env'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(getPendingGoalsRoutes)
app.register(getWeekSummaryRoute)

app.get('/test', async app => {
  const test = 'test'

  return test
})

app
  .listen({
    port: 3333,
    host: '::',
  })
  .then(() => {
    console.log('HTTP server running on port', env.APP_PORT)
  })
  .catch(err => {
    console.error('Error starting server:', err)
    process.exit(1)
  })
