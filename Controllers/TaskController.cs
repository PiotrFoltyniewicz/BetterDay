﻿using Microsoft.AspNetCore.Mvc;
using BetterDay.Models;
using Microsoft.AspNetCore.Authorization;
using BetterDay.Errors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BetterDay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TaskController : ControllerBase
    {

        [HttpGet("today")]
        public async Task<IEnumerable<TaskModel>> GetTodaysTasks()
        {
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            return await TaskModel.GetTodaysTasks(currUser);
        }

        [HttpGet("all")]
        public async Task<IEnumerable<TaskModel>> GetAllTasks()
        {
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            return await TaskModel.GetAllUserTasks(currUser);
        }

        [HttpGet("{date}")]
        public async Task<IEnumerable<TaskModel>> GetTasksByDate(DateTime date)
        {
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            return await TaskModel.GetTasksByDate(currUser, date);
        }

        [HttpPut("create")]
        public async Task<IActionResult> CreateTask([FromBody] TaskModel task)
        {
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            var result = await TaskModel.CreateTask(currUser, task);
            return new JsonResult(result);
        }

        [HttpPost("update/{id}")]
        public async Task<IActionResult> UpdateTask(int id, [FromBody] TaskModel task)
        {
            task.Id = id;
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            var result = await TaskModel.UpdateTask(currUser, task);
            return new JsonResult(result);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            var result = await TaskModel.DeleteTask(currUser, id);
            return new JsonResult(result);
        }
    }
}
