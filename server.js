const express = require('express')
const app = express()
const port = 4000
const cors =require("cors")
const apiRoutes =require("./routes")
const fileUpload =require('express-fileupload')
const bodyParser =require("body-parser")
const path =require("path")


app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/assets/",
  })
);
app.use(cors());
apiRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})