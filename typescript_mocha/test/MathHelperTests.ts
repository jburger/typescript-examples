/// <reference path="../typings/main.d.ts" />
import MathHelper from '../src/pesky_folder/MathHelper';
import * as Chai from 'chai';

const expect = Chai.expect;

describe('The Math Helper Library', () => {
    describe('The `sum` method', () => {
        it('should provide a sum of a number array', () => {
           const numbers: number[] = [,0,-1,1,42, null as number];
           expect( MathHelper.sum( numbers ) ).to.eq( 42 ); 
        });    
        
        it('example failing test', () => {
            expect( 1 ).to.eq( 0 );
        });
    })
});