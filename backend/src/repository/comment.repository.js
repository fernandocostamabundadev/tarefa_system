const prisma = require("../config/prisma.config");

class CommentRepository {
  // 1 criar comentario
  async createComment(data) {
    if (!data) {
      throw new Error("Dados do comentario obrigatórios");
    }
    return await prisma.comment.create(data)({
      data: {
        content: data.content,
      },
    });
  }
  // 2 listar comentario por id
  async findById(id) {
    if (!id) {
      throw new Error("ID é obrigatório");
    }
    return await prisma.comment.findUnique({
      where: { id },
    });
    if (!comment) {
      throw new Error("comentario nao encotrado");
    }
  }
  // 3 atualizar comentario
  async updateComment(id, data) {
    if (!data) {
      throw new Error("Dados são obrigatórios");
    }
    return await prisma.comment.update({
      where: { id },
      data: {
        content: data.comment,
      },
    });
  }
  // 4 eliminar comentario
  async deleteComment(id) {
    return await prisma.comment.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }
  // 5 listar todos os comentarios nao eliminados
  async findAll() {
    return await prisma.comment.findMany({
      where: {
        id,
        deleted_at: null,
      },
    });
  }
}
