export function getStatusClass(status) {
	switch (status) {
	case 'OK':
		return 'ok';
	case 'WARNING':
		return 'warn';
	case 'CRITICAL':
		return 'ko';
	}
}

export function bytesToSize(bytes) {
	const bytesToConvert = parseInt(bytes, 10);
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	if (bytesToConvert === 0) return '0 Byte';
	const i = parseInt(Math.floor(Math.log(bytesToConvert) / Math.log(1024)), 10);
	return Math.round(bytesToConvert / Math.pow(1024, i), 2) + ' ' + sizes[i];
}