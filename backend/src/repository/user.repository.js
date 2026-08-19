const prisma = require("../config/prisma.config");

class UserRepository {
  // 1 criar usuario
  async createUser(data) {
    return await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  }

  // 2.buscar usuario por email
  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: {
        email,
        deleted_at: null,
      },
    });
  }

  // 3.buscar usuario por id
  async findById(id) {
    return await prisma.user.findUnique({
      where: {
        id,
        deleted_at: null,
      },
    });
  }

  // 4.atualizar usuario
  async updateUser(id, data) {
    return await prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  }

  // 5 eliminar usuario
  async deleteUser(id) {
    return await prisma.user.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }
}

module.exports = new UserRepository();
