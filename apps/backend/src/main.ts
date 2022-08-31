import Fastify from "fastify"

import { logger, prismaPlugin, configPlugin, jwtPlugin, sensiblePlugin } from "@multi-chat/backend/plugins"
import { usersRoute } from "@multi-chat/backend/modules"

const fastify = Fastify({
  logger
})

// # Plugins
fastify.register(jwtPlugin)
fastify.register(configPlugin)
fastify.register(sensiblePlugin)
fastify.register(prismaPlugin)

// # Routes
fastify.register(usersRoute)

const start = async () => {
  try {
    await fastify.listen({ port: 3001 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
