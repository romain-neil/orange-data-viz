const random = require('random-interval')
const format = require('./app')

test('Should display octets if lower than kilobyte', () => {
	expect(format(50)).toBe('50 o')
})

describe('perfect calculation', () => {

	test('Should display kilobyte from octet', () => {
		expect(format(1024)).toBe('1 Ko')
		expect(format(1024 * 2)).toBe('2 Ko')
	})

	test('Should display megabyte from octet', () => {
		expect(format(1024 * 1024)).toBe('1 Mo')
		expect(format(1024 * 1024 * 60)).toBe('60 Mo')
	})

	test('Should display gigabyte from octet', () => {
		expect(format(1024 * 1024 * 1024)).toBe('1 Go')
		expect(format(1024 * 1024 * 1024 * 50)).toBe('50 Go')
	})

})

describe('Random calculation', () => {

	test('Calculation with random octets to octets format', () => {
		const rn = random(1, 1023);

		expect(format(rn)).toBe(rn + ' o')
	})

	test('Bulk calculation with random octets', () => {
		for(let i = 0; i < 50; i++) {
			let rn = random(1, 1023);

			expect(format(rn)).toBe(rn + ' o')
		}
	})

	// test('Calculation with random octets to kilobyte format', () => {
	// 	const rn = (random(1, 1023) * 1024);
	//
	// 	expect(format(rn)).toBe((rn / 1024).toString() + ' Ko')
	// })

})
