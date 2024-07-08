import express from "express";

const app = express();

app.get('/',(req,res) => {
        res.send('Server is ready');
});
app.get('/api',(req,res) => {
   console.log("hello jokers");
})
app.get('/jokes',(req,res) => {
        const jokes = [
            {
                id : 1,
                title: 'A jokes',
                content:'This is a joke'

            },
            
            {
                id : 2,
                title: 'A jokes',
                content:'This is 2nd joke'

            },
            {
                id : 3,
                title: 'A jokes',
                content:'This is 3rd joke'

            },
            {
                id : 4,
                title: 'A jokes',
                content:'This is 4th joke'

            },
        ];
       // res.send(jokes);
});

const port = process.env.PORT || 100;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);

}
);