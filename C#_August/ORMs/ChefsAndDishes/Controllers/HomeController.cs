using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ChefsAndDishes.Models;
using Microsoft.AspNetCore.Http;

namespace ChefsAndDishes.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext _context;
    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _context = context;
        _logger = logger;
    }

    public IActionResult Index()
    {
        
        return View("NewChef");
    }

    public IActionResult NewDish()
    {
        List<Chef> chefs = _context.Chefs.ToList();
        ViewBag.chefs = chefs;
        return View("NewDish");
    }

    public IActionResult Success()
    {
        return View("Success");
    }

    public IActionResult ProcessChef(Chef newChef)
    {
        if (ModelState.IsValid)
        {
            return Success();
        }
        return Index();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
