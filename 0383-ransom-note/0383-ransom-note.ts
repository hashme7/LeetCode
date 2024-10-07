function canConstruct(ransomNote: string, magazine: string): boolean {
    let ransomChars = {}
    for(let i = 0 ;i<magazine.length;i++){
        if(ransomChars[magazine[i]]){
            ransomChars[magazine[i]] = ++ransomChars[magazine[i]]
        }else{
            ransomChars[magazine[i]] = 1;
        }
    }
    for(let i =0 ;i<ransomNote.length;i++){
        if(!ransomChars[ransomNote[i]]){
            return false;
        }else{
            ransomChars[ransomNote[i]] = --ransomChars[ransomNote[i]]
        }
    }
    return true;
};