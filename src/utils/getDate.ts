// 날짜와 현재 시간 사이의 간격을 계산하는 함수
export default function getDate(timestamp: number) {
    const now = new Date();
    const date = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000); // 간격을 초 단위로 계산

    if (diffInSeconds < 60) {
      return "방금 전";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes}분 전`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours}시간 전`;
    } else if (diffInSeconds < 172800) {
      return "어제";
    } else if (diffInSeconds < 259200) {
      return "그저께";
    } else if (diffInSeconds < 259200 * 30) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days}일 전`;
    } else {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}월 ${day}일`;
    }
  }
