export interface IStock {
    stockId: string;
    currency: string;
    ric: string;
    bloombergTicker: string;
    bloombergTickerLocal: string;
    name: string;
    country: string;
    price: number;
}

export interface IPageUI{
    pageNumber: number;
    pageSize: number;
    totalPageNumber?: number;
}

export interface IOrder {
    id: number;
    stockCode: string;
    orderSide?: OrderSide | any;
    orderStatus?: OrderStatus | any;
    executionMode?: ExecutionMode;
    orderPrice: number;
    currency?: string;
    total: number;
    isSelected? : boolean;
    errorMessage?: IErrorMessage;
}

export interface IErrorMessage {
    text: string;
    code: number;
}

export interface IOption {
    id: number,
    text : string;
    value : string;
}

export enum OrderSide {
    BUY = 1,
    SELL
}

export enum OrderStatus {
    NOT_READY = 1,
    READY,
    IN_PROGRESS,
    BOOKED,
    REJECTED ,
    ERROR
}


export enum ExecutionMode {
    MARKET = 1,
    LIMIT
}