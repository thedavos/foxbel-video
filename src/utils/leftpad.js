export default function leftPad(number) {
    const pad = '00'
    return pad.substring(0, pad.length - number.length) + number
}