loadit
======

Asynchronously loads (requires) all files in the given directory and all recursive subdirectories that match the given regular expression.

Note: the given directory must not end with a slash.

Example 1
----------

    var loadit = require('loadit'),
        regexp = /.js$/i; /* all files ending with .js (not case sensitive)
    
    loadit.load(__dirname + '/routines', regexp, function(err, files) {
        if (err) throw new Error('Failed loading routines: ' + err);
        
        console.log('loaded new routines: %a', files);
    }); 