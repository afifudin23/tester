const express = require("express");
const app = express();
const port = 5000;

app.get("/testing", (req, res) => {
    res.send({
        status: "manteppp",
        message: "Masukk Pak Ekooo!!"
    });
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})