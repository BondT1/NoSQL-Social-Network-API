const { connect, connection } = require('mongoose');

const connectionString = 
    process.env.MONGOB_URI || 'mongodb://localhost:27017/socialNetworkDB';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;