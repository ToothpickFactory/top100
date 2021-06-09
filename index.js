const topListCount = 100;
let ipMap = {};
let top100Arr = [];

function request_handled(ip) {
	// If this is the first time an ip is coming in add it to the ipMap
	if(!ipMap[ip]) {
		ipMap[ip] = { ip, count: 0 };
	}
	
	// Hold on to a reference 
	const ipObj = ipMap[ip];

	// Increment ip count
	ipObj.count++;

	// If not in the top 100 check if the ip count is greater than the smallest count in the top 100
	if (top100Arr.length < topListCount || ipObj.count > top100Arr[top100Arr.length - 1].count) {
		// If ip is not already in the top 100 add it
		if(!top100Arr.includes(ipObj)) {
			top100Arr.push(ipObj);
		} 
		
		// Sort top 100
		top100Arr.sort((ip1, ip2) => ip2.count - ip1.count);

		// If top100Arr is greater than 100 remove the last ip
		if (top100Arr.length > topListCount) {
			top100Arr.pop()
		}
	}
}

function top100() {
	return top100Arr.map(ipObj => ipObj.ip);
}

function clear() {
	ipMap = {};
	top100Arr = [];
}
