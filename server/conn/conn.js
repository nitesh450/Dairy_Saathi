const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect("mongodb+srv://kamalpavit:uT4fcXOwTUqI5Qru@dairysaathi.4t41bre.mongodb.net/?retryWrites=true&w=majority&appName=dairysaathi", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = conn;
