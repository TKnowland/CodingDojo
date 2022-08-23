#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models;

public class Wedding
{
    [Key]
    public int WeddingId {get; set;}

    [Required(ErrorMessage = "is required.")]
    public string WedderOne {get; set;}

    [Required(ErrorMessage = "is required.")]
    public string WedderTwo {get; set;}

    [Required(ErrorMessage = "is required.")]
    public DateOnly Date {get; set;}

    [Required]
    public string WeddingAddress {get; set;}

    public int UserId {get; set;}
    public User? WeddingCreator {get; set;}

    public DateTime created_at {get; set;} = DateTime.Now;
    public DateTime updated_at {get; set;} = DateTime.Now;

    public List<UserWeddingParticipation> WeddingParticpants {get; set;} = new List<UserWeddingParticipation>();
}