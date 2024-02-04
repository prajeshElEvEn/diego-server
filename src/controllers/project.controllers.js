const asyncHandler = require("express-async-handler");

const createProject = asyncHandler(async (req, res) => {});

const getProject = asyncHandler(async (req, res) => {});

const updateProject = asyncHandler(async (req, res) => {});

const getProjectTasks = asyncHandler(async (req, res) => {});

module.exports = {
  createProject,
  getProject,
  updateProject,
  getProjectTasks,
};
