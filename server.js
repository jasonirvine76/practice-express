const express = require('express')
const router = require('./routes/api.route')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

//app.use(bodyParser.urlencoded({
//    extended: true,
//    })
//)
//app.use(bodyParser.json())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Halo Dunia!')
})

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`)
})