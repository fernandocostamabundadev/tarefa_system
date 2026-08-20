const UserService = require("../service/user.service");

class UserController {
  constructor() {
    this.UserService = new UserService();
  }

  // 1 - Criar usuário
  async createUser(req, res) {
    try {
      const user = await this.UserService.createUser(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  // 2 - Buscar usuário por ID
  async findById(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "ID é obrigatório",
        });
      }
      const user = await this.UserService.findById(id);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      if (error.message.includes("não encontrado")) {
        res.status(404).json({ success: false, message: error.message });
      } else {
        res
          .status(500)
          .json({ success: false, message: "Erro interno do servidor" });
      }
    }
  }

  // 3 - Buscar usuário por email
  async findByEmail(req, res) {
    try {
      const email = req.params.email;
      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email é obrigatório",
        });
      }
      const user = await this.UserService.findByEmail(email);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      if (error.message.includes("não encontrado")) {
        res.status(404).json({ success: false, message: error.message });
      } else {
        res
          .status(500)
          .json({ success: false, message: "Erro interno do servidor" });
      }
    }
  }

  // 4 - Atualizar usuário
  async updateUser(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "ID é obrigatório",
        });
      }
      if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({
          success: false,
          message: "Dados para atualização são obrigatórios",
        });
      }

      const user = await this.UserService.updateUser(id, data);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      if (error.message.includes("não encontrado")) {
        res.status(404).json({ success: false, message: error.message });
      } else {
        res
          .status(500)
          .json({ success: false, message: "Erro interno do servidor" });
      }
    }
  }

  // 5 - Deletar usuário
  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "ID é obrigatório",
        });
      }
      const user = await this.UserService.deleteUser(id);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      if (error.message.includes("não encontrado")) {
        res.status(404).json({ success: false, message: error.message });
      } else {
        res
          .status(500)
          .json({ success: false, message: "Erro interno do servidor" });
      }
    }
  }
}

module.exports = UserController;
