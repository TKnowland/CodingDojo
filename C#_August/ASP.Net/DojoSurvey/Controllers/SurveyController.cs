using Microsoft.AspNetCore.Mvc;
namespace YourNamespace.Controllers;     //be sure to use your own project's namespace!
    public class SurveyController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
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
            return RedirectToAction("result", new { name = Name, location = Location, language = Language, comment = Comment});
        }

    }