export function checkLs() {
    try {
        const userInfo = window.localStorage.getItem('userInfo');
        return userInfo ? JSON.parse(userInfo) : null
    } catch (error) {
        console.error("Ошибка при чтении localStorage:", error);
        return null
    }
}