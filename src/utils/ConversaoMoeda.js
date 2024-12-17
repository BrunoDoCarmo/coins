export default function conversaoMoeda(value) {
    return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}