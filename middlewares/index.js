const express = require('express');
const userRoutes = require('./src/routes/users');
const path = require('path')

const app = express();

const port = process.env.PORT || 3000;

app.use(userRoutes);
app.use('/public', express.static(path.join(__dirname, 'assets')));

app.get('', (req, res) => {
    const uri = path.join(__dirname, 'src','views','index.html');
    res.sendFile(uri);
})

app.listen(port, () => {
    console.log(`API is running in port ${port}`);
})