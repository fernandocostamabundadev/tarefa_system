const UserRepository = require("../repository/user.repository");

class UserService {
  constructor() {
    this.UserRepository = new UserRepository();
  }
  // 1 criar usuario
  async createUser(data) {
    if (!data || !data.name || !data.email || !data.password) {
      throw new Error("Nome, email e senha são obrigatórios");
    }
    const user = await this.UserRepository.createUser(data);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  // 2 buscar usuario por email
  async findByEmail(email) {
    if (!email) {
      throw new Error("email obrigatorio");
    }
    try {
      const user = await this.UserRepository.findByEmail(email);
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      throw new Error("usuario nao encontrado");
    }
  }
  // 3 buscar usuario por id
  async findById(id) {
    if (!id) {
      throw new Error("id obrigatorio");
    }
    try {
      const user = await this.UserRepository.findById(id);
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      throw new Error("usuario nao encontrado");
    }
  }
  // 4 atualizar usuario
  async updateUser(id, data) {
    if (!id) {
      throw new Error("id obrigatorio");
    }
    const user = await this.UserRepository.updateUser(id, data);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  // 5 eliminar usuario
  async deleteUser(id) {
    if (!id) {
      throw new Error("id obrigatorio");
    }
    try {
      const user = await this.UserRepository.deleteUser(id);
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      throw new Error("usuario nao encontrado");
    }
  }
  // 6 listar todos os usuarios
  async findAll() {
    try {
      const user = await this.UserRepository.findAll();
      const users = user.map(
        ({ password, ...userWithoutPassword }) => userWithoutPassword,
      );
      return users;
    } catch (error) {
      throw new Error("nenhum usuario encontrado");
    }
  }
}

module.exports = UserService;
