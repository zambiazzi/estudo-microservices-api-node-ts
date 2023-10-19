import express from 'express';
import AlunosController from './alunos/alunos.controller';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const alunosController = new AlunosController();

app.get('/_health', (request, response) => {
    return response.status(200).json({ message: 'ok' }); 
});

app.get('/alunos', (request, response) => {
    return alunosController.getManyAlunos(request, response);
});

app.listen(3000, () => { 
    console.log('server listening on port 3000');
});
