using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RandomMealsAPI.Models;

namespace RandomMealsAPI.Controllers
{
    [Route("api/DishItems")]
    [ApiController]
    public class DishItemsController : ControllerBase
    {
        private readonly DishItemContext _context;

        public DishItemsController(DishItemContext context)
        {
            _context = context;
        }

        // GET: api/DishItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DishItem>>> GetDishItems()
        {
            return await _context.DishItems.ToListAsync();
        }

        // GET: api/DishItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DishItem>> GetDishItem(int id)
        {
            var dishItem = await _context.DishItems.FindAsync(id);

            if (dishItem == null)
            {
                return NotFound();
            }

            return dishItem;
        }

        // PUT: api/DishItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDishItem(int id, DishItem dishItem)
        {
            if (id != dishItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(dishItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DishItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DishItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DishItem>> PostDishItem(DishItem dishItem)
        {
            _context.DishItems.Add(dishItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDishItem), new { id = dishItem.Id }, dishItem);
        }

        // DELETE: api/DishItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDishItem(int id)
        {
            var dishItem = await _context.DishItems.FindAsync(id);
            if (dishItem == null)
            {
                return NotFound();
            }

            _context.DishItems.Remove(dishItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DishItemExists(int id)
        {
            return _context.DishItems.Any(e => e.Id == id);
        }
    }
}
