export function goToUpdateArticle(articleUuid) {
    window.location.href = `${window.location.origin}/admin/user/article/custom/update?article-uuid=${articleUuid}`
}