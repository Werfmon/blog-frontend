export function goToArticle(articleUuid) {
    window.location.href = window.location.origin + '/article?uuid=' + articleUuid;
}