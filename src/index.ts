import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  const clientIP = c.req.header('CF-Connecting-IP')
  return c.text(clientIP)
})

app.get("/json", (c) => {
  const clientIP = c.req.header('CF-Connecting-IP')
  return c.json({
    "ip": clientIP
  })
})

export default app
