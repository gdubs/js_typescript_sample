namespace ses.api.Models
{
    public class Order{
        public int Id {get;set;}
        public ExecutionMode ExecutionMode {get;set;}
        public OrderSide OrderSide {get;set;}
        public OrderStatus OrderStatus {get;set;}
        public int StockId {get;set;}
        public string StockCode {get;set;}
        public float Price {get;set;}
        public int Amount {get;set;}
    }
}