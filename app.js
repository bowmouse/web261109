// app.js : 영화 배열을 다루는 함수 6개 / 홍길동(학번) / 10주차
// average : 영화 배열 ⇒ 평균 평점(숫자)
const average = (list) => {
    let sum = 0;
    for (const m of list) {
        sum += m.rating;
    }
    return sum / list.length;
}
const best = (list) => {
    let top = list[0];
    for (const m in list) {
        if (m.rating > top.rating) {
            top = m;
        }
    }
    return top;
}
const filterByRating = (list, min) => {
    return list.filter(m => m.rating >= min);
}
const sortByRating = (list) => {
    return [...list].sort((a, b) => b.rating - a.rating)
}
const yearsSince = (dateStr) => {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}
const posterUrl = (path, size) => {
    return "https://image.tmdb.org/t/p/" + size + path;
}
console.log("평균:", average(movies));

console.log("최고:", best(movies).title);

console.log("8점 이상:", filterByRating(movies, 8).length + "편");

const sorted = sortByRating(movies);

console.log("정렬 1위:", sorted[0].title, "/ 원본 1번:", movies[0].title);

console.log(yearsSince(movies[0].date) + "년 전 개봉");

console.log(posterUrl(movies[0].poster, "w342"));

document.title = "내 영화 " + movies.length + "편";

console.table(sortByRating(movies));

document.getElementById("out").textContent = "평균 " + average(movies).toFixed(1) + "점, 최고 " + best(movies).title;




//best(list)// 영화 배열 ⇒ 평점이 가장 높은 영화 객체
//filterByRating(list, min) //영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열
//sortByRating(list) //영화 배열 ⇒ 평점 높은 순으로 정렬한 새 배열(원본은 그대로)
//yearsSince(dateStr) //날짜 문자열 ⇒ 올해까지 몇 년(숫자)
//posterUrl(path, size)// 포스터 경로, 크기 ⇒ TMDB 이미지 주소(문자열)