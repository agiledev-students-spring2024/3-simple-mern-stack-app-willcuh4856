const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for About Us content
const PersonalSchema = new Schema({
    paragraphs: [{
        type: String,
        required: true
    }],
    imageUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Create mongoose Model
const Personal = mongoose.model('Personal', PersonalSchema);

// Export the model so other modules can import it
module.exports = Personal;
