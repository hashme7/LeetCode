function buyChoco(prices: number[], money: number): number {
    let min = Number.MAX_VALUE;
    let secondMin = Number.MAX_VALUE;
    for(let i = 0 ;i< prices.length;i++){
        if(prices[i]<min){
            secondMin = min;
            min= prices[i]
        }else if(prices[i]>=min && prices[i]<secondMin){
            secondMin = prices[i];
        }
    }
    if((min + secondMin) <= money){
        return money - (min+secondMin)
    }else{
        return money;
    }
};