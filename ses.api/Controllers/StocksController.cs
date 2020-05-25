
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ses.api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting ;
using System.Text.Json;
using Newtonsoft.Json;
using System.Linq;

namespace ses.api.Controllers
{
    [EnableCors("SESPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class StocksController : ControllerBase
    {
        private readonly IWebHostEnvironment _webHostEnvironment;

        public StocksController (IWebHostEnvironment webHostEnvironment){
            _webHostEnvironment= webHostEnvironment;
        }


        [HttpGet]
        public ActionResult Get(int pageNumber = 1, int pageSize = 10)
        {
            string json = System.IO.File.ReadAllText("stocks.json");
            var data = JsonConvert.DeserializeObject<List<Stock>>(json);
            var paged = data.Skip(pageSize * (pageNumber - 1))
                                .Take(pageSize);
            var totalPages = (data.Count() + pageSize - 1) / pageSize;
            return Ok(new { Status = 200, Body = new { Data = paged, Page = pageNumber, Count = pageSize, TotalPages = totalPages } });
        }
    }
}