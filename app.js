const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>1Express Application</h1> <h4>Message: Success</h4> <p>Version 1.0</p>');
})
app.get('/products', (req, res) => {
    res.send([
        {
            productId: '80',
            price: 120
        },
        {
            productId: '81',
            price: 150
        }
    ])
})
app.listen(port, console.log(`Server running on port:${port}`));