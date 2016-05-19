export default class MathHelper {
    static sum(numbers: number[]) {
        return numbers.reduce((prev, curr) => prev + curr);
    }
}