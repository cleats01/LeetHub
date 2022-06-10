/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    // 이진 탐색
    // start = 1, end = n
    // mid = Math.floor((start+end)/2)
    // 배드버전이 트루면 앤드를 미드
    // 펄스면 스타트를 미드
    // 멈추는 조건이 스타트가 엔드 보다 커지면 멈춰야됨
    return function(n) { 
        let s = 1, e = n;
        while(s<e) {
            let m = Math.floor((s+e)/2);
            if (isBadVersion(m)) {
                e = m;
            } else {
                s = m+1;
            }
        }
        return s;
    };
};