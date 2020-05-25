import { IStock, IOrder } from './domain.interfaces';
import axios, { AxiosRequestConfig } from 'axios';

class StockService {
    static root: string = 'https://localhost:5001';
    static config = {
        data: {},
        headers:{
            'Content-Type' : 'application/json'
        },
        crossdomain: true
    };

    static getAll() {
        const url = StockService.root + '/api/stocks';

        const client = axios.create({
            baseURL: url,
            responseType: 'json',
            headers: StockService.config
        })


        return axios({
            method: 'GET',
            headers : StockService.config,
            url: url,
            
        })
        return [{ id: 1, code: '11 HK', price: 134.00, currency : 'HKD' }];
    }
}

const config : AxiosRequestConfig = {
    baseURL: 'https://localhost:5001/api',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    }
  };

const client = axios.create();

const GetStocks  = async (pageNumber: number, pageSize: number) => {
    try{
        console.log('service')
        const url = config.baseURL + `/stocks?pageNumber=${pageNumber}&pageSize=${pageSize}`
        return client.get(url);
    }catch(err){
        throw err;
    }
}

const BookOrders = async (order: IOrder) => {
    try{
        console.log('book')
        const url = config.baseURL + '/orders/new'
        return client.post(url, { StockCode: order.stockCode, OrderSide: order.orderSide }, config);
    }catch(err){
        throw err;
    }
}

export {
    GetStocks,
    BookOrders
}