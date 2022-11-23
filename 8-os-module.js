const os = require('os'); //build in module for operating system,

// info about current user

const user =  os.userInfo();
console.log(user);


//uptime of system in sec

const systemUpTime =  os.uptime();
console.log(systemUpTime);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);
