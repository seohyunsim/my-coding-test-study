function solution(array, commands) {
    const answer = [];
    let newArr = [];
    
    for (let i = 0; i < commands.length; i++) {
        newArr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b);
        answer.push(newArr[commands[i][2] - 1]);
    }  
    return answer;
}