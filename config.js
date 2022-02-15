const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://masterUser_chat:JJosfGZR28HbxYYb@cluster0.nxgvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;