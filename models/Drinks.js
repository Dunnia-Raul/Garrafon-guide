const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    mark: String,
    type: String,
    photo: String
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;
