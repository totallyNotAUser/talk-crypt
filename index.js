function encrypt() {
	document.querySelector('#encrypt-msg').value = CryptoJS.AES.encrypt(document.querySelector('#encrypt-msg').value, document.querySelector('#shared-key').value);
}

function decrypt() {
	document.querySelector('#decrypt-msg').value = CryptoJS.AES.decrypt(document.querySelector('#decrypt-msg').value, document.querySelector('#shared-key').value).toString(CryptoJS.enc.Utf8);
}