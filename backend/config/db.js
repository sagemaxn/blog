const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDb connected: ${conn.connection.host}`)
}
catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
}
}

module.exports = connectDB;