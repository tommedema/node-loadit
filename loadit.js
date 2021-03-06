var findit = require('findit');

var load = exports.load = function(dir, regex, cb) {
    if (typeof(dir) !== 'string' || !(regex instanceof RegExp)) {
        return (typeof(cb) === 'function') ? cb('invalid dir or regexp given') : null;
    }
    
    /* execute findit for this directory */
    var finder = findit.find(dir),
        files = [];
    
    /* for each file */
    finder.on('file', function(file) {
        
        /* perform regex for each file */
        if (!regex.test(file)) return;
        
        /* require each validated file */
        files.push(file);
        require(file);
    });
    
    /* when done return without error and with files */
    if (typeof(cb) === 'function') finder.once('end', function() {
        cb(null, files);
    });
};