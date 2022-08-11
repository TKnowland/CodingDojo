using System.ComponentModel.DataAnnotations;
namespace DojoSurveyValidation.Models;
public class User
{
    [Required]
    [MinLength(2)]
    public string Name { get; set; }
 
    [Required]
    public string Location { get; set; }
 
    [Required]
    public string Language { get; set; }
    
    public string Comment { get; set; }
 }

