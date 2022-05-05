export function getToRegistrationPage(e) {
    e.preventDefault()
    console.log(window.location.origin);
    window.location.href = window.location.origin + '/auth/registration'
}