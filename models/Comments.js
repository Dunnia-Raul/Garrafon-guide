const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    place: {type:Schema.Types.ObjectId, ref:'Place'},
    creator: {type:Schema.Types.ObjectId, ref:'User'},
    comments: String,
    garrafon: {type:Schema.Types.ObjectId, ref:'Drink'}

}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;