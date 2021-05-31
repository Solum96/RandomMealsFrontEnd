using Microsoft.EntityFrameworkCore;
using System;

namespace RandomMealsAPI.Models
{
    public class DishItemContext : DbContext
    {
        public DishItemContext(DbContextOptions<DishItemContext> options)
            : base(options)
        {
        }

        public DbSet<DishItem> DishItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DishItem>()
            .Property(e => e.Ingredients)
            .HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries));

            modelBuilder.Entity<DishItem>()
            .Property(e => e.Instructions)
            .HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries));
        }
    }
}