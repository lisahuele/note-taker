const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3001;

//parse incoming string or array data
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data
app.use(express.json());

//ensure public folder is static
app.use(express.static('public'));

//tell server which routes to use based on endpoint
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});