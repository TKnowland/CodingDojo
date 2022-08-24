#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models;

public class Wedding
{
    [Key]
    public int WeddingId {get; set;}

    [Required(ErrorMessage = "Wedder One is required.")]
    public string WedderOne {get; set;}

    [Required(ErrorMessage = "Wedder two is required.")]
    public string WedderTwo {get; set;}

    [Required(ErrorMessage = "Date is Required.")]
    public DateTime Date {get; set;}

    [Required(ErrorMessage = "Address is Required.")]
    public string WeddingAddress {get; set;}

    public DateTime created_at {get; set;} = DateTime.Now;
    public DateTime updated_at {get; set;} = DateTime.Now;

    public int UserId {get; set;}
    public User? WeddingCreator {get; set;}
    public List<UserWeddingParticipation> WeddingParticpants {get; set;} = new List<UserWeddingParticipation>();
}