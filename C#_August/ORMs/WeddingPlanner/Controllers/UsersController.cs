using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers;

public class UsersController : Controller
{
    private readonly ILogger<UsersController> _logger;
    private MyContext _context;

    public UsersController(ILogger<UsersController> logger, MyContext context)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet("register")]
    public IActionResult RegisterUser()
    {
        return View("RegisterNewUser");
    }





    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
