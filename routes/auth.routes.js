const {Router} = require('express')
const router = Router()
const User = require('../model/User')

router.post('/registration', async (req, res) => { 
    try {
        const {username, password} = req.body
        const candidate = await User.findOne({username})
        if(candidate) {
            res.status(403).json({message: 'User has already existed'})
        }
        const user = new User({username, password})
        await user.save()
        res.status(201).json({message: 'Registrated'})
    } catch (error) {
        res.status(500).json({message: 'Something goes wrong'})
    }
})



router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body
        const user = User.findOne({username})
        res.status(201).json({message: 'Fuck yeah!'})

    } catch (error) {
        res.status(500).json({message: 'Something goes wrong'})
    }
})

module.exports = router