import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  const clientIP = c.req.header('CF-Connecting-IP')
  return c.text(clientIP)
})

export default app
