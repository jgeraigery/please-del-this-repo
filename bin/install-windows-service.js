var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name:'snapmail_keeper',
    description: 'The daemon app for snapmail',
    script: 'C:\\MailDev\\bin\\srv.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
    console.log('Install complete.');
    svc.start();
});

svc.install();