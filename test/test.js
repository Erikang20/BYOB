var Application = require( 'spectron' ).Application
var assert = require( 'assert' );
var suite = require( './implementation' );
var expect = require( 'chai' ).expect;

describe( 'BYOB connected', function () {
    it( 'should return true if we are conected', function () {
        expect( suite.connected() ).to.equal( true );
    } );
} );
