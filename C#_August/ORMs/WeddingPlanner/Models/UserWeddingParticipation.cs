#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace WeddingPlanner.Models;

public class UserWeddingParticipation
{
    [Key]
    public int UserWeddingParticipationId {get; set;}
    public DateTime created_at {get; set;} = DateTime.Now;
    public DateTime updated_at {get; set;} = DateTime.Now;
    public int UserId {get; set;}
    public int WeddingId {get; set;}
    public User? Participant {get; set;} 
    public Wedding? Wedding {get; set;}
}