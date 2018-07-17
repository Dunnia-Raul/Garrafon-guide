const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    zone: String,
    city: String,

    capacity: { type: String, enum: ["small", "medium", "big"], default: "medium" }
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;