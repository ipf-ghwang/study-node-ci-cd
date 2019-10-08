const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res, next) => {
   res.send("Hello. I modified it! And testing pull request! Kyung Min");
});


app.listen(PORT, () => {
    console.log("listening on PORT " + PORT);
});