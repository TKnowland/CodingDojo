#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models;

public class User
{
    [Key]
    public int UserId {get; set;}

    [Required]
    [MinLength(2)]
    public string FirstName {get; set;}

    [Required]
    [MinLength(2)]
    public string LastName {get; set;}

    [DataType(DataType.EmailAddress)]
    [Required]
    [EmailAddress]
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

    public List<Association> Weddings {get; set;} = new List<Association>();
}