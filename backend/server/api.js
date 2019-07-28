'use strict'

//External libraries
const express = require('express')
const request = require('request');

//Custom functions and variables
const utils = require('./utils')
const marvel_api_base_url = process.env.MARVEL_API_HOST
const marvel_api_public_key = process.env.MARVEL_API_PUBLIC_KEY

const api = express.Router()

//Endpoint to get characters on x-men serie
api.get('/x-men', (req, res, next) => {
  const ts = + new Date()
  const hash = utils.getMd5Hash(ts)

  // Access the provided 'offset' and 'limt' query parameters
  const offset = (req.query.offset) ? req.query.offset : "0"
  const limit = (req.query.limit) ? req.query.limit : "100"

  request(`${marvel_api_base_url}/series/2258/characters?limit=${limit}&offset=${offset}&ts=${ts}&apikey=${marvel_api_public_key}&hash=${hash}`, function (error, response, body) {
    if(error) {
      return next(new Error(error))
    }

    const body_parsed = JSON.parse(body)
    const characters = body_parsed.data.results.map(row => {
      return {
        'id': row.id,
        'name': row.name,
        'thumbnail': `${row.thumbnail.path}.${row.thumbnail.extension}`,
      }
    })
    
    res.send({total: body_parsed.data.total, characters})
  });
})

//Endpoint to get detail info of a marvel character by the character id
api.get('/marvel/character/:character_id', (req, res, next) => {
  const ts = + new Date()
  const hash = utils.getMd5Hash(ts)
  const { character_id } = req.params

  request(`${marvel_api_base_url}/characters/${character_id}?&ts=${ts}&apikey=${marvel_api_public_key}&hash=${hash}`, function (error, response, body) {
    if(error) {
      return next(new Error(error))
    }
    
    const body_parsed = JSON.parse(body)
    const character = body_parsed.data.results.map(row => {
      return {
        'id': row.id,
        'name': row.name,
        'description': row.description,
        'thumbnail': row.thumbnail,
        'comics': row.comics.items,
        'series': row.series.items,
        'stories': row.stories.items,
        'events': row.events.items,
        'urls': row.urls,
      }
    })

    res.send(character)
  });
})

module.exports = api
