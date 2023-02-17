import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import Users from '../database/models/User';
import { 
  userCorrectMock,
  loginAdminMock,
  loginEmailLess,
  loginIncorrectPass,
 } from './mocks/userMock';
import * as bcrypt from 'bcryptjs';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando /login', () => {
  beforeEach(() => {
    sinon.stub(Users, "findOne").resolves({ ...userCorrectMock } as Users);
    sinon.stub(bcrypt, "compare").resolves(true);
  })

  afterEach(() => {
    (Users.findOne as sinon.SinonStub).restore();
    (bcrypt.compare as sinon.SinonStub).restore();
  })
  
  // let chaiHttpResponse: Response;
  it('testa se é possivel fazer login com dados corretos', async () => {
   
    const httpResponse = await chai.request(app).post('/login').send(loginAdminMock);
  
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.haveOwnProperty('token');
  })

  it('testa se é possivel fazer login com dados incorretos', async () => {
    const httpResponse = await chai.request(app).post('/login').send(loginEmailLess);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({message:"All fields must be filled"});
  })

  it('testa se ao colocar senha menor que 6 caracteres retorna erro', async () => {
    const httpResponse = await chai.request(app).post('/login').send(loginIncorrectPass);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({message:"\"password\" length must be at least 5 characters long"});
  })
  
})
