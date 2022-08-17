#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ChefsAndDishes.Models;

public class Chef
{
    [Key]
    public int ChefId {set; get;}

    [Required]
    public string FirstName {set; get;}

    [Required]
    public string LastName {set; get;}

    [Required]
    public DateTime DOB {set; get;}

    public DateTime CreatedAt {set; get;} = DateTime.Now;
    public DateTime UpdatedAt {set; get;} = DateTime.Now;

    public List<Dish> CreatedDishes { get; set; } = new List<Dish>(); 
}