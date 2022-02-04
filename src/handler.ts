import { Router } from 'itty-router'

import Cities from './handlers/cities'
import City from './handlers/city'

const router = Router()

router
  .get('/api/cities', Cities)
  .get('/api/cities/:id', City)
  .get('*', () => new Response('Not found', { status: 404 }))

export const handleRequest = (request: any) => router.handle(request)
