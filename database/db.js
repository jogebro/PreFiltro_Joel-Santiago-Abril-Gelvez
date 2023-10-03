const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada correctamente');
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo conectar a la base de datos')
    }
}

module.exports = {
    dbConnection
}