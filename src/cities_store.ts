const _cities = [
  {
    id: 1,
    name: 'Copenhagen',
  },
  {
    id: 2,
    name: 'New Orleans',
  },
  {
    id: 3,
    name: 'Sønderborg',
  },
]

export default class PostsStore {
  async all() {
    return _cities
  }

  async find(id: number) {
    return _cities.find((city) => city.id.toString() === id.toString())
  }
}
