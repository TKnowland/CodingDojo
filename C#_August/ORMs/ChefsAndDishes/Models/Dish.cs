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
    [MinLength(2)]
    public string Chef {get;set;}
    [Required]
    public int Tastiness {get;set;}
    [Required]
    [Range(0, int.MaxValue)]
    public int Calories {get;set;}
    [MinLength(10)]
    public string Description {get;set;}

    [Required]
    public Chef? creator {get; set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}