#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ChefsAndDishes.Models;

public class Dish
{
    [Key]
    public int DishID {get;set;}
    [Required]
    [MinLength(2)]
    public string Name {get;set;}

    [Required]
    public int Tastiness {get;set;}
    [Required]
    [Range(1, int.MaxValue)]
    public int Calories {get;set;}
    
    [Required]
    [MinLength(10)]
    public string Description {get;set;}

    [Required]
    public int ChefId {get; set;}
    
    public Chef? creator {get; set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}