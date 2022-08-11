using Microsoft.AspNetCore.Mvc;
namespace DojoSurveyValidation.Controllers;
using DojoSurveyValidation.Models;
    public class SurveyController : Controller
    {
        [HttpGet]
        [Route("")]
        public ViewResult Survey()
        {
            return View();
        }

        [HttpGet("result")]
        public ViewResult Result(String name, String location, String language, String comment)
        {
            ViewBag.Name = name;
            ViewBag.Location = location;
            ViewBag.Language = language;
            ViewBag.Comment = comment;
            return View();
        }

        [HttpPost("process")]
        public IActionResult process(String Name, String Location, String Language, String Comment)
        {
            if (ModelState.IsValid)
                return RedirectToAction("result", new {name = Name, location = Location, language = Language, comment = Comment});
            return View("Survey");
        }

    }