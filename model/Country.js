const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    capital: {
        type: String,
        required: true
    },
    sights: {
        type: [
            {
                img: {type: String, default: ''},
                name:{type: String},
                description: {type: String, default: 'Cool place'},
                rates: [
                    {
                        user: {type: String},
                        rate: {type: Number}
                    }
                ]

            }
        ],
        required: true,
        default: []
    },
})

module.exports = model('Country', schema)