using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ChefsAndDishes.Models;
using Microsoft.EntityFrameworkCore;

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

    public IActionResult ViewChefs()
    {
        List<Chef> chefs = _context.Chefs.Include(c => c.CreatedDishes).ToList();
        return View("ViewChefs", chefs);
    }

    public IActionResult ViewDishes()
    {
        List<Dish> dishes = _context.Dishes.Include(d => d.creator).ToList();
        return View("ViewDishes", dishes);
    }

    public IActionResult ProcessChef(Chef newChef)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newChef);
            _context.SaveChanges();
            return RedirectToAction("ViewChefs");
        }
        return Index();
    }

    public IActionResult ProcessDish(Dish newDish)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return ViewDishes();
        }
        return NewDish();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
