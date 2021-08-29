export function playNotification() {
    const notification = new Audio('./notification.mp3')
    notification.play()
    notification.loop = false
}