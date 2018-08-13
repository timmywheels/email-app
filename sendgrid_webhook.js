const localtunnel = require('localtunnel');

setTimeout(() => {
	localtunnel(5000, { subdomain: 'timwheeler' }, function(err, tunnel) {
		console.log('LT running:', tunnel.url);
	});
}, 2000);
