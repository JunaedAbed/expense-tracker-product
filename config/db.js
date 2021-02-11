const mongoose = require("mongoose"); //import mongoose

const connectDB = async () => {
  try {
    //access mongo_uri
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`ERR: ${err.message}`.red);
    //exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
