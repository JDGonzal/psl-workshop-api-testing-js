const agent = require('superagent-promise')(require('superagent'), Promise );
const statusCode = require ('http-status-codes');
const chai = require ('chai');
const expect = chai.expect;
describe('First Api Tests' , () => {
  it('Consume GET Service' , () => {
    return agent.get('https://httpbin.org/ip').then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body).to.have.property('origin');
    });
  });

  it('Consume GET Service with query parameters' , () => {
    const query = {
      name: 'John' ,
      age: '31' ,
      city: 'New York'
    };
  return agent.get('https://httpbin.org/get')
    .query(query)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.args).to.eql(query);
    });
  });

  it('Consume POST Service' , () => {
    const body = {
      name: 'John' ,
      age: 31,
      city: 'New York'
    };
    return agent
      .post('https://httpbin.org/post')
      .send(body)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(body);
    });
  });

  it('Consume HEAD Service' , () => {
    const query = {
      name: 'John' ,
      age: '31' ,
      city: 'New York'
    };
    return agent.head('https://httpbin.org/headers')
      .query(query)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.headers).to.have.property('server','meinheld/0.6.1');
    });
  });

  it('Consume PATCH Service' , () => {
    const body = {
      name: 'John' ,
      age: 31,
      city: 'New York'
    };
    return agent
      .patch('https://httpbin.org/patch')
      .send(body)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(body);
    });
  });

  it('Consume PUT Service' , () => {
    const body = {
      name: 'John' ,
      age: 31,
      city: 'New York'
    };
    return agent
      .put('https://httpbin.org/put')
      .send(body)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(body);
    });
  });

  it('Consume DELETE Service with query parameters' , () => {
    const query = {
      name: 'John' ,
      age: '31' ,
      city: 'New York'
    };
  return agent.del('https://httpbin.org/delete')
    .query(query)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.args).to.eql(query);
    });
  });
});
