const express = require('express')
const app = express()
const { tours } = require('./API/tours')

app.get('/api/tours', (req, res) => {
  res.status(200).json(tours)
})

app.get('/api/tours/:tourID', (req, res) => {
  const { tourID } = req.params
  const singleTour = tours.find((tour) => tour.id === Number(tourID))
  if(!singleTour) res.send('No match found.')
  res.json(singleTour)
})

app.listen(80, () => {
  console.log('Server is listening at port 80.')
})
