using System;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ses.api.Models;

namespace ses.api.Controllers
{
    [EnableCors("SESPolicy")]
    [Route("api/[controller]")]
    [ApiController]    
    public class OrdersController: ControllerBase
    {
        [Route("new")]
        [HttpPost]
        public ActionResult New([FromBody] Order model){

                Console.WriteLine("posting new");
                switch(model.StockCode){
                    case "GDC2USD":
                        return StatusCode(500);
                    case "CGEDUSD":
                        return StatusCode(504);
                    case "BNJTUSD":
                        return Ok(new { message = "Rejected"});
                    default:
                        break;
                }
            

            return Ok("new");
        }
    }
}