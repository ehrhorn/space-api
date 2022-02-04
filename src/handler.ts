import { Router } from 'itty-router'

import Cities from './handlers/cities'

const router = Router()

router
  .get('/api/cities', Cities)
  .get('*', () => new Response('Not found', { status: 404 }))

export const handleRequest = (request: any) => router.handle(request)
