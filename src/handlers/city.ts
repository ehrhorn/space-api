import Store from '../cities_store'

const City = async (request: any) => {
  const city = new Store()
  const cityId = request.params.id

  const body = JSON.stringify(await city.find(cityId))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return new Response(body, { headers })
}

export default City
