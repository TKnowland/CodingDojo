using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        string Text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum a culpa distinctio officia? Officiis dolores libero quas ipsa mollitia dicta rerum molestiae, voluptatibus est ipsum tempore consequatur eum modi.";
        return View("Index", Text);
    }

    public IActionResult Numbers()
    {
        int[] someNumbers = {1,2,3,4,5};
        return View(someNumbers);
    }

    public IActionResult Users()
    {
        User Person = new User()
        {
            FirstName = "Jimmy",
            LastName = "McGill"
        };
        User OtherPerson = new User()
        {
            FirstName = "Saul",
            LastName = "Goodman"
        };

        List<User> Users = new List<User>()
        {
            Person, OtherPerson
        };

        return View(Users);
    }

    public IActionResult User()
    {
        User Person = new User()
        {
            FirstName = "Smelly",
            LastName = "Cheese"
        };
        return View(Person);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
