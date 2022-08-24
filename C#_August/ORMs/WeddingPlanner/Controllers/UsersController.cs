using System.Diagnostics;
using Microsoft.AspNetCore.Identity;
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

    [HttpGet("Login")]
    public IActionResult Login()
    {
        return View("Login");
    }

    [HttpPost("ProcessNewUser")]
    public IActionResult ProcessNewUser(User newUser)
    {
        if (ModelState.IsValid)
        {
            if(_context.Users.Any(u => u.Email == newUser.Email))
            {
                ModelState.AddModelError("Email", "Email already in use!");
                return Success();
            }
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
            _context.Add(newUser);
            _context.SaveChanges();
            HttpContext.Session.SetString("CurrentUser", newUser.Email);
        }
        return Login();
    }




    public IActionResult Success()
    {
        return View("Success");
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
