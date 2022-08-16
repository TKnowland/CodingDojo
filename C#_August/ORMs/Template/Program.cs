// Additional libraries
using Microsoft.EntityFrameworkCore;
using ProjectName.Models;
// Creates builder (also part of boilerplate code for web apps)
var builder = WebApplication.CreateBuilder(args)
//  Creates the db connection string
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
// Adds database connection - must be before app.Build();
builder.Services.AddDbContext<MyContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

