namespace ses.api.Models
{
    public enum ExecutionMode{
        MARKET = 1,
        LIMIT
    }

    public enum OrderSide {
        BUY = 1,
        SELL
    }

    public enum OrderStatus{
        NOT_READY = 1,
        READY,
        IN_PROGRESS,
        BOOKED,
        REJECTED
    }
}