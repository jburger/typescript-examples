/// <reference path="../typings/main.d.ts" />
import MathHelper from '../src/MathHelper';
import * as Chai from 'chai';
import * as mocha from 'mocha';

const expect = Chai.expect;

describe('MathHelper Library', () => {
    describe('`sum` method', () => {
        it('should provide a sum of a number array', () => {
           const numbers: number[] = [,0,-1,1,42, null as number];
           expect( MathHelper.sum( numbers ) ).to.eq( 42 );
        });
    });
});
