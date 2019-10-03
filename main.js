const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res, next) => {
   res.send("Hello. I modified it!");
});


app.listen(PORT, () => {
    console.log("listening on PORT " + PORT);
});