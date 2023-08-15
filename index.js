const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 5500;

const allRoute = require('./routes/allRoutes')

app.use('/user', allRoute)


app.get('/', (req, res) => {
    res.send('server is ready to check assignment')
})
app.listen(port, () => {
    console.log(`server is running prot ${port}`);
})