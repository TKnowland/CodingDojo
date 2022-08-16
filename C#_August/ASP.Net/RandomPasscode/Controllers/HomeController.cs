using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using RandomPasscode.Models;
using Microsoft.AspNetCore.Http;

namespace RandomPasscode.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index(string Passcode = "12345678901234", int count = 0)
    {
        HttpContext.Session.SetInt32("Number", count);
        HttpContext.Session.SetString("Passcode", Passcode);
        return View("Index");
    }

    public IActionResult GeneratePasscode()
    {
        int count = (HttpContext.Session.GetInt32("Number") ?? default(int)) + 1;
        string[] characters = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"};
        string Passcode = "";
        Random rand = new Random();
        for (int i = 0; i < 14; i++)
        {
            string newCharacter = characters[rand.Next(0, characters.Length-1)];
            Passcode += newCharacter;
        }
        
        return Index(Passcode, count);
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
