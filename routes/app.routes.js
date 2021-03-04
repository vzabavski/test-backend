const {Router} = require('express')
const router = Router()
const Country = require('../model/Country')

router.get('/', async (req, res) => { 
    try {
        const countries = await Country.find()
        res.json(countries)
    } catch (error) {
        res.status(500).json({message: 'Something goes wrong'})
    }
})

router.get('/:id', async (req, res) => {
   try {
    const country = await Country.findById(req.params.id)
    res.json(country)
   } catch (error) {
    res.status(500).json({message: 'Something goes wrong'})
   }
}) 

router.patch('/:id', async (req, res) => {
    try {
        const {rate, id} = req.body
        let country = await Country.findById(req.params.id)
        country.sights.find((item) => item._id == id).rates.push(rate)
        country.save()
        res.json({message: "New rate added"})
    } catch (error) {
        res.status(500).json({message: 'Something goes wrong'})
    }
})

router.post('/', async (req, res) => {
    try {
        const {name, capital, sights} = req.body
        const country = new Country({name, capital, sights})
        await country.save()
        res.status(201).json({message: 'Added'})

    } catch (error) {
        res.status(500).json({message: 'Something goes wrong'})
    }
})

module.exports = router