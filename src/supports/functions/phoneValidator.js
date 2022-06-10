// HARUS DIMULAI DENGAN ANGKA 0
// MINIMUM LENGTH 9 ANGKA
// MAXIMUM LENGTH 13

function phoneValidator(input='') {
	if (input[0] !== '0') {
		return 'The first number must start with 0'
	}

	if ((input.length >= 9) && (input.length <= 13)) {
		for (let i = 0; i < input.length; i++) {
			if (!(input[i] >= 0)) {
				return 'Cannot include character'
			}
			if (input[i] === ' ') {
				return 'Cannot include white space'
			}
		}
	} else {
		return 'The number you enter must be greater than 9 and less than 13'
	}


	return true
}

export default phoneValidator