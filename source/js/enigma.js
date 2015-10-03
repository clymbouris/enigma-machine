
var config = {
	alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	rotors:	[
				// Rotor Type   I / EKMFLGDQVZNTOWYHXUSPAIBRCJ
				[4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15, 0, 8, 1, 17, 2, 9],
				// Rotor Type  II / AJDKSIRUXBLHWTMCQGZNPYFVOE
				[0, 9, 3, 10, 18, 8, 17, 20, 23, 1, 11, 7, 22, 19, 12, 2, 16, 6, 25, 13, 15, 24, 5, 21, 14, 4],
				// Rotor Type III / BDFHJLCPRTXVZNYEIWGAKMUSQO
				[1, 3, 5, 7, 9, 11, 2, 15, 17, 19, 23, 21, 25, 13, 24, 4, 8, 22, 6, 0, 10, 12, 20, 18, 16, 14]
			],
	// Rotor Type I Notch: 'Q' , Rotor Type II Notch: 'E' , Rotor Type III Notch: 'V'
	notches: [16, 4, 21], 
	reflectors: [
					// Reflector Type A / EJMZALYXVBWFCRQUONTSPIKHGD
					[4, 9, 12, 25, 0, 11, 24, 23, 21, 1, 22, 5, 2, 17, 16, 20, 14, 13, 19, 18, 15, 8, 10, 7, 6, 3],
					// Reflector Type B / YRUHQSLDPXNGOKMIEBFZCWVJAT	
					[24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2, 22, 21, 9, 0, 19],
					// Reflector Type C / FVPJIAOYEDRZXWGCTKUQSBNMHL
					[5, 21, 15, 9, 8, 0, 14, 24, 4, 3, 17, 25, 23, 22, 6, 2, 19, 10, 20, 16, 18, 1, 13, 12, 7, 11]
				]
};

// ENIGMA MACHINE //

var Enigma = function(){
	this.plugboard = new Plugboard();
	this.rotors = [];
	this.rotors.push(new Rotor(0));
	this.rotors.push(new Rotor(1));
	this.rotors.push(new Rotor(2));
	this.reflector = new Reflector(2);
};

