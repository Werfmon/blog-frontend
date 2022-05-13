export function getToRegistrationPage(e) {
    e.preventDefault()
    window.location.href = window.location.origin + '/auth/registration'
}