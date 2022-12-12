import express from 'express';

const app = express();

app.use(express.json());

// usamos get para pedir algum dado
// a função get recebe dois parâmetros: o primeiro é a rota, o segundo é uma callback que recebe até 4 parâmetros: req (Request (ou requisição), é por meio dela que recebemos os dados (envio por query, params e body), res (Response (ou resposta), é por meio dela que respondemos o que nos é solicitado), next, err. 
// app.get('/', (req, res) => res.status(200).json({ message: 'olá, mundo!' }));

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
  ];

// listar times
app.get('/teams', (_req, res) => {
    res.status(200).json({ teams });
});

// cadastrando um novo time
app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
    res.status(201).json({ team: newTeam }); 
});

// alterando um time
app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
  
    const updateTeam = teams.find((team) => team.id === Number(id));
  
    if (!updateTeam) {
      res.status(404).json({ message: 'Team not found' });
    }
  
    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam });
  });  

// excluindo um time
app.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    const arrayPosition = teams.findIndex((team) => team.id === Number(id));
    teams.splice(arrayPosition, 1);
  
    res.status(200).end();
  });

export default app;