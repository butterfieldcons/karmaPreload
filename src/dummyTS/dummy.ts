//SuperService.spec.ts
//import {test} from '../appointments/appointments';  
//import {expect} from 'chai';

export function main() {  
  describe('SuperService', () => {
    it('should do something with the provided $log mock', () => {
      let _msgs = []; 
      let logMock = (msg) => {
        _msgs.push(msg);
      };

      expect(_msgs).to.have.length(0);     
      let superService = new SuperService(logMock);
      superService.doSomething();

      expect(_msgs).to.have.length(1);
    });
  });
}