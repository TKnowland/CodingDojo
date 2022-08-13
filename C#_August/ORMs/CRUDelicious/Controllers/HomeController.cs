// Using statements
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;
namespace CRUDelicious.Controllers;

public class HomeController : Controller
{
    private MyContext _context;

    // here we can "inject" our context service into the constructor
    public HomeController(MyContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        List<Dish> AllDishes = _context.dishes.ToList();

        return View("Index", AllDishes);
    }
    [HttpGet("Dish/New")]
    public IActionResult NewDish()
    {
        return View("NewDish");
    }

    public IActionResult ProcessDish(Dish newDish)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return NewDish();
    }

    [HttpGet("Show/{ID}")]
    public IActionResult ShowDish(int ID)
    {
        Dish CurrentDish = _context.dishes.FirstOrDefault(dish => dish.DishID == ID);
        return View("ShowDish", CurrentDish);
    }

    [HttpGet("Dish/Delete/{ID}")]
    public IActionResult DeleteDish(int ID)
    {
        Dish CurrentDish = _context.dishes.FirstOrDefault(dish => dish.DishID == ID);
        _context.dishes.Remove(CurrentDish);
        _context.SaveChanges();
        return Index();
    }

    [HttpGet("Dish/Edit/{ID}")]
    public IActionResult EditDish(int ID)
    {
        Dish CurrentDish = _context.dishes.FirstOrDefault(dish => dish.DishID == ID);
        return View("EditDish", CurrentDish);
    }

    public IActionResult UpdateDish(int ID, Dish newDish)
    {
        if (ModelState.IsValid)
        {
            Dish CurrentDish = _context.dishes.SingleOrDefault(dish => dish.DishID == ID);
            CurrentDish.Name = newDish.Name;
            CurrentDish.Chef = newDish.Chef;
            CurrentDish.Calories = newDish.Calories;
            CurrentDish.Tastiness = newDish.Tastiness;
            CurrentDish.Description = newDish.Description;
            _context.SaveChanges();
            return ShowDish(ID);
        }
        return EditDish(ID);
    }
}
