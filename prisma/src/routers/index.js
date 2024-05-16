const fastify = require('fastify')({ logger: true });
const playerController = require('../controllers/playerController');
const teamController = require('../controllers/teamController');
const matchController = require('../controllers/matchController');

// Rota para criar um jogador
fastify.post('/players', async (request, reply) => {
  try {
    const player = await playerController.createPlayer(request.body);
    reply.code(201).send(player);
  } catch (error) {
    reply.code(500).send({ error: 'Internal Server Error' });
  }
});

// Rota para listar todos os jogadores
fastify.get('/players', async (request, reply) => {
  try {
    const players = await playerController.getAllPlayers();
    reply.send(players);
  } catch (error) {
    reply.code(500).send({ error: 'Internal Server Error' });
  }
});

// Rota para criar um time
fastify.post('/teams', async (request, reply) => {
  try {
    const team = await teamController.createTeam(request.body);
    reply.code(201).send(team);
  } catch (error) {
    reply.code(500).send({ error: 'Internal Server Error' });
  }
});

// Rota para listar todos os times
fastify.get('/teams', async (request, reply) => {
  try {
    const teams = await teamController.getAllTeams();
    reply.send(teams);
  } catch (error) {
    reply.code(500).send({ error: 'Internal Server Error' });
  }
});

// Rota para criar uma partida
fastify.post('/matches', async (request, reply) => {
  try {
    const match = await matchController.createMatch(request.body);
    reply.code(201).send(match);
  } catch (error) {
    reply.code(500).send({ error: 'Internal Server Error' });
  }
});

// Rota para listar todas as partidas
fastify.get('/matches', async (request, reply) => {
  try {
    const matches = await matchController.getAllMatches();
    reply.send(matches);
  } catch (error) {
    reply.code(500).send({ error: 'Internal Server Error' });
  }
});

// Rota para atualizar jogador por ID
fastify.put('/players/:id', async (request, reply) => {
  try {
    const { id } = request.params;
    const player = await playerController.updatePlayerById(id, request.body);
    if (!player) {
      reply.code(404).send({ error: 'Player not found' });
    } else {
      reply.send(player);
    }
  } catch (error) {
    reply.code(500).send({ error: 'Internal Server Error' });
  }
});

// Rota para excluir time por ID
fastify.delete('/teams/:id', async (request, reply) => {
  try {
    const { id } = request.params;
    const deletedTeam = await teamController.deleteTeamById(id);
    if (!deletedTeam) {
      reply.code(404).send({ error: 'Team not found' });
    } else {
      reply.send({ message: 'Team deleted successfully' });
    }
  } catch (error) {
    reply.code(500).send({ error: 'Internal Server Error' });
  }
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();