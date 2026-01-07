const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.body)
    res.json({ message: "Prisma ORM" })
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:3000`)
});