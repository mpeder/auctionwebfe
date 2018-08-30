using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace auction_front_end.Pages
{
    public class LiveAuctionModel : PageModel
    {
        public string Message { get; set; }

        public void OnGet()
        {
            Message = "\"Test Auction\"";
        }
    }
}
