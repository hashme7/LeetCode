function isHappy(n: number): boolean {
    let seen = {};
    while(n!=1 && !seen[n]){
        seen[n] = true;
        n = findSquare(n);
    }
    return n==1?true:false;
};
function findSquare(n):number {
    return n.toString().split('').reduce((sum,num)=>{
        return sum + Math.pow(num,2)
    },0)
}