import express from 'express';

const app = express();
const PORT = 5000;

app.use('/', (req, res) =>{
    res.json({
        message : 'App is running',
    });
});
app.listen(PORT, () =>{
    console.log(`App is listening to port:${PORT}`);
});

