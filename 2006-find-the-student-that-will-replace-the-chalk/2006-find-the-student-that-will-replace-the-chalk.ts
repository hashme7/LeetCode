function chalkReplacer(chalk: number[], k: number): number {
    let stdChalkNeed = 0
    for(let j =0 ;j< chalk.length;j++){
        stdChalkNeed+=chalk[j]
    }
    let reminder = k%stdChalkNeed 
    let i =0;
    while(chalk[i]<=reminder){
        reminder-=chalk[i];
        if(i == chalk.length-1){
            i=0
        }else{
            i++;
        };
    }
    return i;
};