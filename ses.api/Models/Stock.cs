namespace ses.api.Models
{
    public class Stock
    {
        public string stockId {get;set;}
        public string Currency {get;set;}
        public string Ric {get;set;}
        public string BloombergTicker {get;set;}
        public string BloombergTickerLocal {get;set;}
        public string Name {get;set;}
        public string Country {get;set;}
        public decimal Price {get;set;}
    }
}