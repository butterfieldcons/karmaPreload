__karma__.loaded = function() {};

const rawTranspiledLocation = '/base/tests';
System.baseURL = '/base/'
System.paths = {  
  'someTest-spec': 'src/transpiledTests/someTest-spec.js',
  'jasmine': '/base/node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
  'chai': '/base/node_modules/chai/chai.js',
  'appointments': 'src/appointments/appointments.js',
  'appointments2': 'src/appointments/appointments2.js',
  'angular2/angular2': 'libs/angular2.js'
};
//System.paths['traceur'] = '../base/libs/traceur.js';

function onlyUnitTestFiles(path) {  
	var a = path;
	var b = /-spec\.js$/.test(path);
  return /-spec\.js$/.test(path);
}

function karmaFileToModule(fileName) {  
  return 'someTest-spec';
  //return fileName.replace(System.baseURL,'').replace('.js','');               
}

Promise.all(
Object.keys(window.__karma__.files)
.filter(onlyUnitTestFiles)
.map(karmaFileToModule)
.map(function(modName){
	var a = modName;
  return System.import(modName)
    .then(function(mod) {
       if (mod.hasOwnProperty('main')) {
          mod.main(); //expose the tests
        } else {
          throw new Error('Test module: ' + modName + ' does not implement main() method.');
        }
    })
    .then(function() {
      __karma__.start(); //run the tests
    })
    .then(null, function(error) {console.error('Failed to load:', error);});
}));