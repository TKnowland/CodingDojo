using Microsoft.AspNetCore.Mvc;
namespace DojoSurveyValidation.Controllers;
using DojoSurveyValidation.Models;
    public class SurveyController : Controller
    {
        [HttpGet]
        [Route("")]
        public ViewResult Survey()
        {
            return View("Survey");
        }

        [HttpGet("result")]
        public IActionResult Result(User user)
        {
            return View("Result", user);
        }

        [HttpPost("process")]
        public IActionResult Process(User newUser)
        {
            if (ModelState.IsValid)
                return RedirectToAction("Result", newUser);
            return Survey();
        }

    }