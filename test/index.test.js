import { expect } from "chai"
import { describe, it } from "mocha"
import { BitArray } from "../lib/index.js"

describe('BitArray', () => {
    it('returns an object matching itself', () =>
    {
        // act
        const b = new BitArray()

        // assert
        expect(b instanceof BitArray)
    })

    describe('toBin()', () => {
        it('should return a valid BitArray', () => {
            // arrange
            const testValue = 58
            const expectedResult = [0,0,1,1,1,0,1,0]

            // act
            const result = BitArray.toBin(testValue)

            // assert
            expect(result).deep.equal(expectedResult)
        })
    })

    describe('inNBitSet()', () => {
        it('should throw when n is negative', () => {
            // arange
            const testValue = 33
            const testN = -5
            const expectedError = 'Must be between 0 and 7'

            // assert
            expect(() => BitArray.isNBitSet(testValue, testN)).throws(expectedError)
        })
        it('should throw when n is greater than 8', () => {
            // arange
            const testValue = 33
            const testN = 12
            const expectedError = 'Must be between 0 and 7'

            // assert
            expect(() => BitArray.isNBitSet(testValue, testN)).throws(expectedError)
        })
        it('should throw when number is negative', () => {
            // arange
            const testValue = -5
            const testN = 5
            const expectedError = 'Must be between 0 and 255'

            // assert
            expect(() => BitArray.isNBitSet(testValue, testN)).throws(expectedError)
        })
        it('should throw when number is greater than 255', () => {
            // arange
            const testValue = 333
            const testN = 5
            const expectedError = 'Must be between 0 and 255'

            // assert
            expect(() => BitArray.isNBitSet(testValue, testN)).throws(expectedError)
        })
    })
    describe('toByte()', () => {
        it('should output a number', function () {
            // arrange
            const inputArray = [1,0,1,0,1,0,1,0]
            const expectedValue = 170

            // act
            const result = BitArray.toByte(inputArray)

            // assert
            expect(result).equal(expectedValue)
        })
    })
    describe('fromBuffer()', function() {
        it
    })
})