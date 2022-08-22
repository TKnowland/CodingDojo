using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsAndCategories.Models;

namespace ProductsAndCategories.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext _context;
    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("product/new")]
    public IActionResult NewProduct()
    {
        List<Product> Products = _context.Products.ToList();
        ViewBag.Products = Products;
        return View("NewProduct");
    }

    [HttpPost("product/proccess")]
    public IActionResult ProcessProduct(Product newProduct)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newProduct);
            _context.SaveChanges();
        }
        return RedirectToAction("NewProduct");
    }

    [HttpGet("category/new")]
    public IActionResult NewCategory()
    {
        List<Category> Categories = _context.Categories.ToList();
        ViewBag.Categories = Categories;
        return View("NewCategory");
    }

    [HttpPost("category/proccess")]
    public IActionResult ProcessCategory(Category newCategory)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newCategory);
            _context.SaveChanges();
        }
        return RedirectToAction("NewCategory");
    }

    [HttpGet("product/{ID}")]
    public IActionResult ShowProduct(int ID)
    {
        Product CurrentProduct = _context.Products.Include(p => p.Categories).ThenInclude(a => a.Category).FirstOrDefault(p => p.ProductId == ID);
        ViewBag.CurrentProduct = _context.Products.Include(p => p.Categories).ThenInclude(a => a.Category).FirstOrDefault(p => p.ProductId == ID);
        ViewBag.Categories = _context.Categories.Where(c => !CurrentProduct.Categories.Select(p => p.CategoryId).Contains(c.CategoryId));
        return View("ShowProduct");
    }

    [HttpPost("product/add/category/{ProductId}")]
    public IActionResult AddCategory(int ProductId, Association NewAssociation)
    {
        NewAssociation.ProductId = ProductId;
        _context.Add(NewAssociation);
        _context.SaveChanges();
        return RedirectToAction("ShowProduct", new {ID = ProductId});
    }

    [HttpGet("category/{CategoryId}")]
    public IActionResult ShowCategory(int CategoryId)
    {
        Category CurrentCategory = _context.Categories.Include(c => c.Products).ThenInclude(a => a.Product).FirstOrDefault(c => c.CategoryId == CategoryId);
        ViewBag.CurrentCategory = _context.Categories.Include(c => c.Products).ThenInclude(a => a.Product).FirstOrDefault(c => c.CategoryId == CategoryId);
        ViewBag.Products = _context.Products.Where(p => !CurrentCategory.Products.Select(c => c.ProductId).Contains(p.ProductId));
        return View("ShowCategory");
    }

    [HttpPost("category/add/product/{CategoryId}")]
    public IActionResult AddProduct(int CategoryId, Association NewAssociation)
    {
        NewAssociation.CategoryId = CategoryId;
        _context.Add(NewAssociation);
        _context.SaveChanges();
        return RedirectToAction("ShowCategory", new {CategoryId = CategoryId});
    }

    [HttpGet("Success")]
    public IActionResult Success()
    {
        return View("Success");
    }














    [HttpGet("privacy")]
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
