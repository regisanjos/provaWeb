const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTeam = async (data) => {
  return await prisma.team.create({ data });
};

const getAllTeams = async () => {
  return await prisma.team.findMany();
};

const getTeamById = async (id) => {
  return await prisma.team.findUnique({ where: { id: parseInt(id) } });
};

const updateTeamById = async (id, data) => {
  return await prisma.team.update({ where: { id: parseInt(id) }, data });
};

const deleteTeamById = async (id) => {
  return await prisma.team.delete({ where: { id: parseInt(id) } });
};

module.exports = {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeamById,
  deleteTeamById
};