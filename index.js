const express = require("express")
const dbConnect = require("./database/mongoConnector");

const app = express();


app.use(express.json())


app.delete("/:name", async (req, resp) => {
    let result = await dbConnect();
    let data = await result.deleteOne({ name: req.params.name })
    return (data.deletedCount === 0) ? resp.send("cant delete") : resp.send("deleted");

})


app.listen(4500)