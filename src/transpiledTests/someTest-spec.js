
var appointments_1 = require('appointments');
var appointments_2 = require('appointments2');
var chai_1 = require('chai');
function main() {
    describe('myTest', function () {
        it('getting angular to align', function () {
            var _msgs = [];
            var logMock = function (msg) {
                _msgs.push(msg);
            };
            chai_1.expect(_msgs).to.have.length(0);
            var x = new appointments_1.Appointments();
            console.info(x);            
            var xy = new appointments_2.Appointments2();
            console.info(xy);
        });
    });
}
exports.main = main;
