const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    zone: String,
    city: String,
    comments: String,
    capacity: { type: String, enum: ["small", "medium", "big"], default: "medium" }
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        }
    });

placeSchema.index({
    location: '2dsphere'
});
const Place = mongoose.model('Place', placeSchema);
module.exports = Place;