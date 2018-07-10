using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace auction_front_end.Controllers
{
    [Route("api/[controller]")]
    public class AuctionsDataController : Controller
    {
       

        [HttpGet("[action]")]
        public IEnumerable<Auction> Auctions()
        {
            List<Auction> auctions = new List<Auction>();

            for (int i = 0; i < 10; i++)
            {
                Auction newAuc = new Auction()
                {
                    Description = "Test auction " + i.ToString(),
                    Name = "Auction #" + i.ToString(),
                    StartTime = new DateTime(2018, 4, i + 1, 16, 30, 00).ToString("yyyy-MM-dd"),
                    State = "Finished",
                    Items = new List<Item>()
                };

                newAuc.Items.Add(new Item()
                {
                    Name = "Item 1",
                    StartPrice = 100,
                    FinalPrice = 125
                });

                newAuc.Items.Add(new Item()
                {
                    Name = "Item 2",
                    StartPrice = 1000,
                    FinalPrice = 950
                });

                auctions.Add(newAuc);
            }

            Auction upcomingAuc = new Auction()
            {
                Description = "Test auction upcoming",
                Name = "Upcoming new auction",
                StartTime = new DateTime(2018, 6, 6, 16, 30, 00).ToString("yyyy-MM-dd"),
                State = "Upcoming",
                Items = new List<Item>()
            };

            upcomingAuc.Items.Add(new Item()
            {
                Name = "Item 1",
                StartPrice = 100,
                FinalPrice = 125
            });

            auctions.Add(upcomingAuc);

            return auctions;
        }

        public class Auction
        {
            public string Name { get; set; }
            public string State  { get; set; }
            public string Description { get; set; }
            public string StartTime { get; set; }
            public List<Item> Items { get; set; }

        }

        public class Item
        {
            public string Name { get; set; }
            public int StartPrice { get; set; }

            public int FinalPrice { get; set; }
        }
 
    }
}
