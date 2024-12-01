function checkIfExist(arr: number[]): boolean {
    let hash = {};
    for(let i =0 ;i<arr.length;i++){
        hash[arr[i]]=i;
    }
    for(let i =0;i<arr.length;i++){
        let curr = arr[i]*2;
        console.log(hash[curr],i)
        if(hash[curr] != undefined && hash[curr]!= i)return true;
    }
    return false;

    
};