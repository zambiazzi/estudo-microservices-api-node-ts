import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/_health', (request, response) => {
    return response.status(200).json({ message: 'ok' }); 
});

app.listen(3000, () => { 
    console.log('server listening on port 3000');
});
