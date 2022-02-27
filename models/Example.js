const mongoose = require("mongoose");

const ExampleSchema = new mongoose.Schema(
    {
        example: {
            type: String,
            required: true,
            unique: true,
        }
    },
    {timestamps: true},
);

module.exports = mongoose.model("example", ExampleSchema);