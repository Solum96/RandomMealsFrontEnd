using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RandomMealsAPI.Models
{
    public class DishItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<string> Ingredients { get; set; }
        public IEnumerable<string> Instructions { get; set; }
    }
}
