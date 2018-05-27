
const conversationLib = require('../libs/conversationLib');

const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Conversation', () => {

  describe('/GET conversation', () => {
    // DELETE  advertiser if exists
    it('it should get first Conversation Row when id is provided', (done) => {

      chai.request('http://127.0.0.1:4200')
        .get('/conversation/1')
        .then((res) => {
          expect(res).to.not.be.an('undefined');
          if (res !== undefined) {
            expect(res.statusCode).to.have.status(200);
          }
          done();
        }).catch((err) => { done(); });
    });
  });
});
