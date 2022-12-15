export class BitArray {

    static isNBitSet(number, n) {
        validateValue(number, 0, 255)
        validateValue(n, 0, 7)
        if (number & (1 << n)) {
            return 1
        }
        return 0


    }

    static toByte(bits) {
        let n = 0
        n += bits[0] ? 128 : 0
        n += bits[1] ? 64 : 0
        n += bits[2] ? 32 : 0
        n += bits[3] ? 16 : 0
        n += bits[4] ? 8 : 0
        n += bits[5] ? 4 : 0
        n += bits[6] ? 2 : 0
        n += bits[7] ? 1 : 0
        return n
    }

    static toBin(n) {
        const bits = []
        for (let index = 7; index >= 0; index--) {
            bits.push(BitArray.isNBitSet(n, index))
        }

        return bits
    }

    /**
     * 
     * @param {Buffer} inBuffer 
     */
    static fromBuffer(inBuffer) {
        const bitArray = []
        inBuffer.forEach(element => {
            bitArray.unshift(element)
        });
        return bitArray
    }
}

/**
 * 
 * @param {number} number 
 * @param {number} min 
 * @param {number} max 
 */
export function validateValue(number, min, max) {
    if (number < min || number > max) {
        throw new RangeError(`Must be between ${min} and ${max}`)
    }
}
