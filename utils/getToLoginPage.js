export function getToLoginPage(e) {
    e.preventDefault()
    window.location.href = window.location.origin + '/auth/login'
}