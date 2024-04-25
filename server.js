const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

db.once('open', () => {
    app.use(express.urlendcoded({ extended: true }));
    app.use(express.json());
    app.use(routes);

    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}.`);
    });
});
