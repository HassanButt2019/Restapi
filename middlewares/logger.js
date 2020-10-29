//@desc logs req for console

console logger = (req,response , next)=>{
req.hello = 'HELLO THIS IS LOGGER FUNCTION';
console.log(`${req.method} ${req.protocol} :/${req.get('host')} ${req.originalUrl}`);
next();
}


module.exports = logger;