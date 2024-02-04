const asyncHandler = require("express-async-handler");

const createTask = asyncHandler(async (req, res) => {});

const getTask = asyncHandler(async (req, res) => {});

const updateTask = asyncHandler(async (req, res) => {});

const deleteTask = asyncHandler(async (req, res) => {});

module.exports = {
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
