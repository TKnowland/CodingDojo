#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models;

public class Wedding
{
    [Key]
    public int WeddingId {get; set;}

    [Required]
    public string WedderOne {get; set;}

    [Required]
    public string WedderTwo {get; set;}

    [Required]
    public DateOnly Date {get; set;}

    [Required]
    public string WeddingAddress {get; set;}

    public int UserId {get; set;}

    public DateTime created_at {get; set;} = DateTime.Now;
    public DateTime updated_at {get; set;} = DateTime.Now;
    public List<Association> Users {get; set;} = new List<Association>();
}