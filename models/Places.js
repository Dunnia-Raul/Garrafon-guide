const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    zone: String,
    city: String,
    capacity: { type: String, enum: ["small", "medium", "big"], default: "medium" },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

placeSchema.index({
	location: '2dsphere'
});
const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
