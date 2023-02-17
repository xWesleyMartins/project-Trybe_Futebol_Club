import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import Teams from '../database/models/Teams';
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
  // beforeEach(() => {
  //   sinon.stub(Teams, "findAll").resolves({ ...userCorrectMock } as Teams);
  //   sinon.stub(bcrypt, "compare").resolves(true);
  // })

  // afterEach(() => {
  //   (Teams.findOne as sinon.SinonStub).restore();
  //   (bcrypt.compare as sinon.SinonStub).restore();
  // })
  
  // let chaiHttpResponse: Response;
  it('testa status /teams', async () => {
   
    const httpResponse = await chai.request(app).get('/teams');
  
    expect(httpResponse.status).to.be.equal(200);
  })

  it('testa se é possivel fazer login com dados incorretos', async () => {
    const httpResponse = await chai.request(app).get('/teams/:id');

    expect(httpResponse.status).to.equal(200);
  })

  
})