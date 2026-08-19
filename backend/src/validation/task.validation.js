const joi = require("joi");

const taskValidationSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  status: joi.string().valid("pending", "in-progress", "completed").required(),
  dueDate: joi.date().iso().required(),
});

module.children = taskValidationSchema;
