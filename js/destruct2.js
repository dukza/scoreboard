// 객체 해체 할당: 동일한 키로 매핑
const {b, a, ...f} = {a: 10, b: 20, c: 30, d: 40, e: 50};
console.log(a, b, f);