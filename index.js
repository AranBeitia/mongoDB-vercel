const express = require('express')
const app = express()
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

require('dotenv').config()

const PORT = process.env.PORT || 3001
// const PORT = 3000

const { typeError } = require('./middlewares/errors')

const { dbConnection } = require('./config/config')

app.use(express.json())

dbConnection()

app.use('/products', require('./routes/products'))
app.use('/users', require('./routes/users'))
app.use('/orders', require('./routes/orders'))

app.use(typeError)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
