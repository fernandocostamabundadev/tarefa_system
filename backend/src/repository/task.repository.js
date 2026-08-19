const prisma = require("../config/prisma.config");

class TaskRepository {
  // 1 criar tarefa
  async createTask(data) {
    if (!data) {
      throw new Error("Dados da tarefa obrigatórios");
    }
    return await prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
        priority: data.priority,
      },
    });
  }
  // 2 listar tarefa por id
  async findById(id) {
    if (!id) {
      throw new Error("ID é obrigatório");
    }
    return await prisma.task.findUnique({
      where: {
        id,
        deleted_at: null,
      },
    });
    if (!task) {
      throw new Error("tarefa nao encotrada");
    }
  }
  // 3 atualizar tarefa
  async updateTask(id, data) {
    if (!id) throw new Error("ID é obrigatório");
    if (!data) throw new Error("Dados são obrigatórios");
    if (!data.title || !data.status || !data.priority) {
      throw new Error("Título, status e prioridade são obrigatórios");
    }

    return await prisma.task.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
        priority: data.priority,
      },
    });
  }
  // 4 eliminar tarefa
  async deleteTask(id) {
    return await prisma.task.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }
  // 5 listar todas as tarefas nao eliminadas
  async findAll() {
    return await prisma.task.findMany({
      where: { deleted_at: null },
    });
  }
}

module.exports = new TaskRepository();
