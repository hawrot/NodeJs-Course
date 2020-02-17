const authMiddleware = require('../middleware/is-auth');
const expect = require('chai').expect;
const jwt = require('jsonwebtoken');
const sinon = require('sinon');

describe('Auth middleware', function () {
    it('should throw an error if no authorization header is present', function () {
        const req = {
            get: function () {
                return null;
            }
        };

        expect(authMiddleware.bind(this, req, {}, () =>{})).to.throw('Not authenticated.');

    });

    it('should throw an error if the authrization header is only one string', function () {
        const req = {
            get: function () {
                return 'xyz';
            }
        };

        expect(authMiddleware.bind(this, req, {}, ()=>{})).to.throw();
    });

    it('should thrown an error if the token cannot be vierfied', function () {
        const req = {
            get: function () {
                return 'Bearer xyz';
            }
        };
        expect(authMiddleware.bind(this, req, {}, ()=>{})).to.throw();
    });

    it('should yield a userId after decoding the tocken', function () {
        const req = {
            get: function () {
                return 'Bearer fdfdfdfdfdfd';
            }
        };
        sinon.stub(jwt, 'verify');
        jwt.verify.returns({userId: 'abc'});
        authMiddleware(req, {}, ()=>{} );
        expect(req).to.have.property('userId');
        expect(req).to.have.property('userId', 'abc');
        jwt.verify.restore();
    })
});

