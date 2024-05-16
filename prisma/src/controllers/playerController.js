const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createPlayer = async (data) => {
  return await prisma.player.create({ data });
};

const getAllPlayers = async () => {
  return await prisma.player.findMany();
};

const getPlayerById = async (id) => {
  return await prisma.player.findUnique({ where: { id: parseInt(id) } });
};

const updatePlayerById = async (id, data) => {
  return await prisma.player.update({ where: { id: parseInt(id) }, data });
};

const deletePlayerById = async (id) => {
  return await prisma.player.delete({ where: { id: parseInt(id) } });
};

module.exports = {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayerById,
  deletePlayerById
};




