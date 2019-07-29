'use strict'

// External libraries
const express = require('express')
const request = require('request')

// Custom functions and variables
const utils = require('./utils')
const marvelApiBaseUrl = process.env.MARVEL_API_HOST
const marvelApiPublicKey = process.env.MARVEL_API_PUBLIC_KEY

const api = express.Router()

// Endpoint to get characters on x-men serie
api.get('/x-men', (req, res, next) => {
  const ts = +new Date()
  const hash = utils.getMd5Hash(ts)

  // Access the provided 'offset' and 'limt' query parameters
  const offset = (req.query.offset) ? req.query.offset : '0'
  const limit = (req.query.limit) ? req.query.limit : '100'

  request(`${marvelApiBaseUrl}/series/2258/characters?limit=${limit}&offset=${offset}&ts=${ts}&apikey=${marvelApiPublicKey}&hash=${hash}`, function (error, response, body) {
    if (error) {
      return next(new Error(error))
    }

    const bodyParsed = JSON.parse(body)
    const characters = bodyParsed.data.results.map(row => {
      return {
        id: row.id,
        name: row.name,
        thumbnail: `${row.thumbnail.path}.${row.thumbnail.extension}`
      }
    })

    res.send({ total: bodyParsed.data.total, characters })
  })
})

// Endpoint to get detail info of a marvel character by the character id
api.get('/marvel/character/:characterId', (req, res, next) => {
  const ts = +new Date()
  const hash = utils.getMd5Hash(ts)
  const { characterId } = req.params

  request(`${marvelApiBaseUrl}/characters/${characterId}?&ts=${ts}&apikey=${marvelApiPublicKey}&hash=${hash}`, function (error, response, body) {
    if (error) {
      return next(new Error(error))
    }

    const bodyParsed = JSON.parse(body)
    const character = bodyParsed.data.results.map(row => {
      return {
        id: row.id,
        name: row.name,
        description: row.description,
        thumbnail: row.thumbnail,
        comics: row.comics.items,
        series: row.series.items,
        stories: row.stories.items,
        events: row.events.items,
        urls: row.urls
      }
    })

    res.send(character)
  })
})

module.exports = api
