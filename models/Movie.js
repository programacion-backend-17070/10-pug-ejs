const path = require('path')
const fs = require('fs').promises

class Movie {
  constructor() {
    this.path = path.join(__dirname, '../database/movies.json')
  }

  async getMovieById(id) {
    const data = await this.readData()
    const movie = data.find(movie => movie.id == id)
    if (!movie) {
      throw new Error('Movie not found')
    }
    return movie
  }

  async add(movie) {
    const data = await this.readData()
    const id = data[data.length - 1] ? data[data.length - 1].id : 0
    movie.id = id + 1
    data.push(movie)
    await this.writeData(data)
  }

  async getAll() {
    return this.readData()
  }

  writeData(data) {
    return fs.writeFile(this.path, JSON.stringify(data, null, 2))
  }

  async readData () {
    const raw = await fs.readFile(this.path, "utf8")
    return JSON.parse(raw)
  }
}

module.exports = Movie