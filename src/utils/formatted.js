import leftPad from './leftpad';

export default function formattedTime(secs) {
    const minutes = parseInt(secs / 60, 10)
    const seconds = parseInt(secs % 60, 10)
    return `${minutes}:${leftPad(seconds.toString())}`
}