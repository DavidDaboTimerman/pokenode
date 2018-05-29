
const conversationLib = require('../libs/conversationLib');

const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Conversation', () => {
  describe('/GET conversation', () => {
    // DELETE  advertiser if exists
    it('it should get first Conversation Row when no id is provided', (done) => {
      chai.request('http://127.0.0.1:4200')
        .get('/conversation/first')
        .then((res) => {
          expect(res).to.not.eql('undefined');
          if (res !== undefined) expect(res.statusCode).to.eql(200);
          expect(res.body.orderNumber).to.eql(1);
          done();
        }).catch((err) => { 
          expect(err).to.not.be.null;
          done(); 
        });
    });

    it('it should get Correct Conversation Row when id is provided', (done) => {
      chai.request('http://127.0.0.1:4200')
        .get('/conversation/first/2')
        .then((res) => {
          expect(res).to.not.eql('undefined');
          if (res !== undefined) expect(res.statusCode).to.eql(200);
          expect(res.body.orderNumber).to.eql(2);
          done();
        }).catch((err) => { 
          expect(err).to.not.be.null;
          done(); 
        });
    });
  });
});
