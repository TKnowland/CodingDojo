using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LoginAndRegistration.Models;
using Microsoft.AspNetCore.Identity;
namespace LoginAndRegistration.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private MyContext _context;

    public HomeController(MyContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
        HttpContext.Session.Clear();
        return View("Index");
    }

    public IActionResult Login()
    {
        HttpContext.Session.Clear();
        return View("Login");
    }

    public IActionResult ProcessNewUser(User user)
    {
        if (ModelState.IsValid)
        {
            if(_context.Users.Any(u => u.Email == user.Email))
            {
                ModelState.AddModelError("Email", "Email already in use!");
                return Index();
            }
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            user.Password = Hasher.HashPassword(user, user.Password);
            _context.Add(user);
            _context.SaveChanges();
            HttpContext.Session.SetString("CurrentUser", user.Email);

            return RedirectToAction("Success");
        }
        return Index();
    }

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

            return Success();
        }
        return Login();
    }

    public IActionResult Success()
    {
        return View("Success");
    }

    public IActionResult LogOut()
    {
        HttpContext.Session.Clear();
        return Index();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
