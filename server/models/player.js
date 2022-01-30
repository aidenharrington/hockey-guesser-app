const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create schema for player
const PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Player object must have name.']
    },
    // api_id: {
    //     type: Number,
    //     required: [true, 'Player object must have api_id.']
    // },
    // goals: {
    //     type: Number,
    //     default: 0
    // },
    // assists: {
    //     type: Number,
    //     default: 0
    // },
    // penalty_time: {
    //     type: Number,
    //     default: 0
    // },
    // team: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Team',
    //     required: [true, 'Player object must have team.']
    // }
});

// Create model for player
const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;