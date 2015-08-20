
/*var CONST_ENV = {
    protocol: window.location.protocol,
    hostname: window.location.hostname
};*/

/*ngmApiServiceProvider.setWebApiBaseUrl(CONST_ENV.protocol + '//' + CONST_ENV.hostname + '/WebApi/api/');
console.info('WebApi BaseURL set to ' + CONST_ENV.protocol + '//' + CONST_ENV.hostname + '/WebApi/api/');
ngmApiServiceProvider.setGatewayApiBaseUrl(CONST_ENV.protocol + '//' + CONST_ENV.hostname + '/GatewayApi/api/');
console.info('WebApi BaseURL set to ' + CONST_ENV.protocol + '//' + CONST_ENV.hostname + '/GatewayApi/api/');*/

function Format(str) {
    for (i = 1; i < arguments.length; i++) {
        var r = RegExp("\\{" + (i - 1) + "\\}", "g");
        str = str.replace(r, arguments[i]);
    }
    return str;
}

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.beginsWith = function(prefix) {
    return this.indexOf(prefix, 0) === 0;
};

String.prototype.reverse = function(){
    splitext = this.split("");
    revertext = splitext.reverse();
    reversed = revertext.join("");
    return reversed;
}

function stringToTime(timeToConvert) {
        var dt = new Date(timeToConvert);
        return dt.toTimeString();
};

function isUndefined(value){return typeof value === 'undefined';}

function isDefined(value){return typeof value !== 'undefined';}