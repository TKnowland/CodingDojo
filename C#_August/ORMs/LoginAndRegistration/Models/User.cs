#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace LoginAndRegistration.Models;

public class User
{
    [Key]
    public int id {get; set;}

    [Required]
    [MinLength(2)]
    public string FirstName {get; set;}

    [Required]
    [MinLength(2)]
    public string LastName {get; set;}

    [Required]
    public string Email {get; set;}

    [DataType(DataType.Password)]
    [Required]
    [MinLength(8, ErrorMessage="Password must be 8 characters or longer!")]
    public string Password {get; set;}
    public DateTime created_at {get; set;} = DateTime.Now;
    public DateTime updated_at {get; set;} = DateTime.Now;

    [NotMapped]
    [Compare("Password")]
    [DataType(DataType.Password)]
    public string Confirm { get; set; } 
}