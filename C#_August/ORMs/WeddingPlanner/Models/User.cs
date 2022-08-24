#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models;

public class User
{
    [Key]
    public int UserId {get; set;}

    [Required(ErrorMessage = "First name is required.")]
    [MinLength(2)]
    public string FirstName {get; set;}

    [Required(ErrorMessage = "Last name is required.")]
    [MinLength(2)]
    public string LastName {get; set;}

    [DataType(DataType.EmailAddress)]
    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress]
    public string Email {get; set;}

    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Password is required.")]
    [MinLength(8, ErrorMessage="Password must be 8 characters or longer!")]
    public string Password {get; set;}

    public DateTime created_at {get; set;} = DateTime.Now;
    public DateTime updated_at {get; set;} = DateTime.Now;

    [NotMapped]
    [Compare("Password")]
    [DataType(DataType.Password)]
    public string Confirm { get; set; }

    public List<Wedding> CreatedWeddings {get; set;} = new List<Wedding>();
    public List<UserWeddingParticipation> UserWeddings {get; set;} = new List<UserWeddingParticipation>();
}