import Store from '../cities_store'

const Cities = async () => {
  const cities = new Store()
  const body = JSON.stringify(await cities.all())
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return new Response(body, { headers })
}

export default Cities
