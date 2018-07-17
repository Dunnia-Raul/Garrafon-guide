const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    place: {type:Schema.Types.ObjectId, ref:'Places'},
    user: {type:Schema.Types.ObjectId, ref:'Users'},
    commnents: String

}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;