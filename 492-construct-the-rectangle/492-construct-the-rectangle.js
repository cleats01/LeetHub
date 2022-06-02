/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    // 나누어떨어지는 것 중에서 가장 n/2에 가까운 것 중 큰수가 width
    // 1부터 n까지 중에 나누어떨어지는 경우의 수는 무조건 짝수다 [result[(result.length/2)],result[(result.length/2)-1]]
    // 제곱근이 정수이면 짝수가 아니네
    // 홀수일 경우 제곱근 두개 출력
    let result = [];
    for (let i = 1; i<=area; i++) {
        if (area%i===0) result.push(i);
    }
    if (result.length%2===1) result = [Math.sqrt(area),Math.sqrt(area)];
    else result = [result[(result.length/2)],result[(result.length/2)-1]];
    
    
    return result;
};