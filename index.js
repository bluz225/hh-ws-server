require("dotenv").config()
require("./models") // connect to the db
const express = require("express")
const cors = require("cors")

// app config/middleware
const app = express()
const PORT = process.env.PORT || 9000
app.use(cors())
app.use(express.json()) //json req.bodies
// static upload folder for images
app.use(express.static("uploads"))

app.get("/", (req, res) => {
	res.send("home route")
})

// Route specific middleware
app.use("/users", require("./controllers/api-v1/users"))
app.use("/restaurants", require("./controllers/api-v1/restaurants"))
app.use("/images", require("./controllers/api-v1/images"))
app.use("/locations", require("./controllers/api-v1/locations"))

app.listen(PORT, () => {
	console.log(`Vegeta: ITS OVER (PORT)${PORT}!?!?`)
})
