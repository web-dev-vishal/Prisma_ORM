const express = require('express')
const app = express()
const PORT = 4000

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.body)
    res.json({ message: "Prisma ORM" })
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:4000`)
});