#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ChefsAndDishes.Models;

public class Chef
{
    [Key]
    public int ChefId {get; set;}

    [Required]
    public string FirstName {get; set;}

    [Required]
    public string LastName {get; set;}

    [Required]
    [IsAdultAtrribute]
    public DateTime DOB {get; set;}

    public DateTime CreatedAt {get; set;} = DateTime.Now;
    public DateTime UpdatedAt {get; set;} = DateTime.Now;

    public List<Dish> CreatedDishes { get; set; } = new List<Dish>(); 

    public int Age(DateTime Date)
    {
        int Age = DateTime.Now.Year - Date.Year;
        return Age;
    }
}


public class IsAdultAtrribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
    {
        DateTime date = (DateTime)value;
        if ((DateTime.Now.Year - date.Year) < 18)
        {
            return new ValidationResult("Must be 18 or older");
        }
        return ValidationResult.Success;
        
    }
}