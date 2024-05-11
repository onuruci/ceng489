const SHA256 = require('crypto-js/sha256');
const fs = require('node:fs');

function calculateHash(index, timestamp, data, previousHash, nonce) {
    return SHA256(index + timestamp + JSON.stringify(data) + previousHash + nonce).toString();
}


function mine() {
	while(true) {
		let index = 1;
		let timestamp = Date.now();
		let data = '';
		let previousHash = '0000000000000000000000000000000000000000000000000000000000000000'
		let nonce = 1;

	
		let zeroCount = 3;

		while(true) {
			let sha = SHA256(index + timestamp + JSON.stringify(data) + previousHash + nonce).toString();
			let zeros = '0'.repeat(zeroCount);
			if(sha.slice(0, zeroCount) == zeros) {
				console.log(sha);
				fs.writeFileSync('res.txt', sha);
				break;
                	}
			nonce += 1;

		}
	}

}

mine();

