import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { decrementGoalCompletion } from '../../functions/create-goal-completion'

export const decrementeCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/completions/decrement',
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { goalId } = request.body

      const result = await decrementGoalCompletion({
        goalId
      })

      return { result }
    }
  )
}

