import Fastify, { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { sanitize } from './utils/sanitizer'
import { normalize } from './utils/normalizer';

const server: FastifyInstance = Fastify({})

server.post('/encode', async (request, reply) => {
  const requestBody = z.object({
    text: z.string()
  })

  let {text} = requestBody.parse(request.body)

  text = sanitize(text)
  text = normalize(text)

  console.log(text)

  return {msg: 'encoding...'}
})

const start = async (): Promise<void> => {
  try {
    await server.listen({ port: 3000 })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

    console.log(`server running on port http://localhost:${port}`)

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()