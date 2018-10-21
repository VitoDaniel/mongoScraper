
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default: false,
        required: false
    },
    note: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ]

});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;