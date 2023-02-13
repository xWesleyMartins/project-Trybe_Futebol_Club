import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import Users from '../database/models/User';
import { userCorrectMock, loginAdminMock, loginPassIncorrectMock } from './mocks/userMock';
import * as bcrypt from 'bcryptjs';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando /login', () => {
  // let chaiHttpResponse: Response;
  it('testa se é possivel fazer login com dados corretos', async () => {
    sinon.stub(Users, "findOne").resolves({ ...userCorrectMock } as Users);
    sinon.stub(bcrypt, "compare").resolves(true);
    const httpResponse = await chai.request(app).post('/login').send(loginAdminMock);

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.haveOwnProperty('token');
  })

  it('testa se é possivel fazer login com dados incorretos', async () => {
    const httpResponse = await chai.request(app).post('/login').send(loginPassIncorrectMock);

    expect(httpResponse.status).to.be.equal(401);
    expect(httpResponse.text).to.deep.equal('{ "message": "Incorrect email or password" }');
  })
})
//   /**
//    * Exemplo do uso de stubs com tipos
//    */


//   before(async () => {
//     sinon
//       .stub(Example, "findOne")
//       .resolves({
//         ...<Seu mock>
//       } as Example);
//   });

//   // after(()=>{
//   //   (Example.findOne as sinon.SinonStub).restore();
//   // })

//   // it('...', async () => {
//   //   chaiHttpResponse = await chai
//   //      .request(app)
//   //      ...

//   //   expect(...)
//   // });

//   it('Seu sub-teste', () => {
//     expect(false).to.be.eq(true);
//   });
// });
