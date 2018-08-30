using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace auction_front_end.Pages
{
    public class AuctionsModel : PageModel
    {
        public string Message { get; set; }

        public void OnGet()
        {
            Message = "Below you can see all our past, live and future auctions";
        }
    }
}
