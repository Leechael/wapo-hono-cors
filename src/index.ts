import '@phala/wapo-env'
import { Hono } from 'hono/tiny'
import { cors } from 'hono/cors'
import { handle } from '@phala/wapo-env/guest'

export const app = new Hono()

app.use(cors())

app.get('/', (c) => {
  const derivedKey = Wapo.deriveSecret("SALTY");
  const hex = Buffer.from(derivedKey).toString('hex');
  return c.json({ message: `${hex}` })
})

export default handle(app)
