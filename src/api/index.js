import { Service } from '@/utils/request';


export function cate(param) {
    return Service({
        url: 'api/content/cate',
        method: 'get',
        params: param
    });
}
export function news(param) {
    return Service({
        url: 'api/content/news',
        method: 'get',
        params: param
    });
}
export function product(param) {
    return Service({
        url: 'api/content/product',
        method: 'get',
        params: param
    });
}

export function newsDetail(param) {
    return Service({
        url: 'api/content/news_detail',
        method: 'get',
        params: param
    });
}
export function productDetail(param) {
    return Service({
        url: 'api/content/product_detail',
        method: 'get',
        params: param
    });
}

export function headingImg(param) {
    return Service({
        url: 'api/content/headimg',
        method: 'get',
        params: param
    });
}

export function submitMessage(param) {
    return Service({
        url: 'api/content/submit_message',
        method: 'post',
        data: param
    });
}