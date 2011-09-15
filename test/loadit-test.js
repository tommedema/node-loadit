var vows    = require('vows'),
    assert  = require('assert'),
    loadit  = require('../loadit'),
    dir     = __dirname + '/folder1',
    regex   = /.js$/i;

vows.describe('loadit callback').addBatch({
    'Load property': {
        topic: loadit.load,
        
        'is defined as a function' : function(loadFn) {
            assert.deepEqual(typeof(loadFn), 'function');
        },
        
        'when called' : {
            topic : function(loadFn) {
                loadFn(dir, regex, this.callback);
            },
            
            'results in a list of .js files': function(err, files) {
                
            }
        }
    }
}).export(module);