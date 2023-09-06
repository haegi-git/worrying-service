

export default function pageNumber(
    totalPosts:number){
    const dividedByTen = Math.ceil(totalPosts / 10); // 35를 10으로 나눈 몫을 계산합니다.
    const resultArray = [];

    for (let i = 1; i <= dividedByTen; i++) {
      resultArray.push(i);
    }
    return resultArray
}