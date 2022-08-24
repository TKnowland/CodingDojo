using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers;

public class WeddingsController : Controller
{
    private readonly ILogger<WeddingsController> _logger;
    private MyContext _context;

    public WeddingsController(ILogger<WeddingsController> logger, MyContext context)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet("Welcome")]
    public IActionResult ShowWeddings()
    {
        if (LoggedIn())
        {
            List<Wedding> Weddings = _context.Weddings.Include(w => w.WeddingCreator).Include(w => w.WeddingParticpants).ToList();
            return View("ShowWeddings", Weddings);
        }
        return RedirectToAction("Login", "Users");
    }

    public bool LoggedIn()
    {
        return HttpContext.Session.GetInt32("CurrentUser") != null;
    }

    [HttpGet("Wedding/New")]
    public IActionResult NewWedding()
    {
        if (LoggedIn())
        {
            return View("NewWedding");
        }
        return RedirectToAction("Login", "Users");
    }

    [HttpPost("Wedding/New/Process/<UserId>")]
    public IActionResult ProcessNewWedding(Wedding newWedding, int UserId)
    {
        if (ModelState.IsValid)
        {
            newWedding.UserId = UserId;
            _context.Add(newWedding);
            _context.SaveChanges();
            return RedirectToAction("ShowWeddings");
        }
        return NewWedding();
    }

    [HttpGet("Wedding/Delete/<WeddingId>")]
    public IActionResult DeleteWedding(int WeddingId)
    {
        Wedding currentWedding = _context.Weddings.SingleOrDefault(w => w.WeddingId == WeddingId);
        _context.Remove(currentWedding);
        _context.SaveChanges();
        return RedirectToAction("ShowWeddings");
    }

    [HttpGet("Wedding/Show/<WeddingId>")]
    public IActionResult ShowWedding(int WeddingId)
    {
        if (LoggedIn())
        {
            Wedding CurrentWedding = _context.Weddings.Include(c => c.WeddingParticpants).ThenInclude(p => p.Participant).SingleOrDefault(w => w.WeddingId == WeddingId);
            return View("ShowWedding", CurrentWedding);
        }
        return RedirectToAction("Login", "Users");
    }

    [HttpPost("Weddings/{WeddingId}/Participate")]
    public IActionResult Participate(int WeddingId)
    {
        if (HttpContext.Session.GetInt32("CurrentUser") == null)
        {
            return RedirectToAction("Login", "Users");
        }
        UserWeddingParticipation? existingParticipation = _context.UserWeddingParticipations.FirstOrDefault(uwp => uwp.UserId == (int)HttpContext.Session.GetInt32("CurrentUser"));

        if (existingParticipation != null)
        {
            _context.Remove(existingParticipation);
        }
        else
        {
            UserWeddingParticipation newParticipation = new UserWeddingParticipation(){
                UserId = (int)HttpContext.Session.GetInt32("CurrentUser"),
                WeddingId = WeddingId
            };
            _context.UserWeddingParticipations.Add(newParticipation);
        }

        _context.SaveChanges();
        return RedirectToAction("ShowWeddings");
    }
}