#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace LoginAndRegistration.Models;

public class LogInUser
{
    [Required]
    public string Email {get; set;}

    [DataType(DataType.Password)]
    [Required]
    public string Password {get; set;}
}