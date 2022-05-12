export function goToWriteArticle(e) {
    e.preventDefault();
    let uuid = sessionStorage.getItem('token').substr(36, 36);
    window.location.href = `${window.location.origin}/admin/creator/?uuid=${uuid}`;
}