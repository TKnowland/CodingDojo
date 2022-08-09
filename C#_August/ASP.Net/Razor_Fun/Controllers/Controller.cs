using Microsoft.AspNetCore.Mvc;
namespace YourNamespace.Controllers;     //be sure to use your own project's namespace!
    public class HelloController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet("")]       //type of request
        public ViewResult Foods()
        {
            return View();
        }
    }