const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createMatch = async (data) => {
  return await prisma.match.create({ data });
};

const getAllMatches = async () => {
  return await prisma.match.findMany();
};

const getMatchById = async (id) => {
  return await prisma.match.findUnique({ where: { id: parseInt(id) } });
};

const updateMatchById = async (id, data) => {
  return await prisma.match.update({ where: { id: parseInt(id) }, data });
};

const deleteMatchById = async (id) => {
  return await prisma.match.delete({ where: { id: parseInt(id) } });
};

module.exports = {
  createMatch,
  getAllMatches,
  getMatchById,
  updateMatchById,
  deleteMatchById
};