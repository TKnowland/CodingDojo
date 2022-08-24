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
        HttpContext.Session.Remove("CurrentUser");
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
                return Login();
            }
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
            _context.Add(newUser);
            _context.SaveChanges();
            HttpContext.Session.SetInt32("CurrentUser", newUser.UserId);
            return RedirectToAction("ShowWeddings", "Weddings");
        }
        return Login();
    }

    [HttpPost("ProcessLogin")]
    public IActionResult ProcessLogin(LogInUser user)
    {
        if(ModelState.IsValid)
        {
            var currentUser = _context.Users.SingleOrDefault(u => u.Email == user.Email);
            if(currentUser == null)
            {
                ModelState.AddModelError("Email", "Invalid Email/Password");
                return Login();
            }
            var hasher = new PasswordHasher<LogInUser>();
            var result = hasher.VerifyHashedPassword(user, currentUser.Password, user.Password);
            if (result == 0)
            {
                ModelState.AddModelError("Password", "Invalid Email/Password");
                return Login();
            }
            HttpContext.Session.SetInt32("CurrentUser", currentUser.UserId);
            return RedirectToAction("ShowWeddings", "Weddings");
        }
        return Login();
    }




    public IActionResult Success()
    {
        return View("Success");
    }
}
