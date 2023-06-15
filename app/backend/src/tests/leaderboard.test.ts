import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';
import { 
  retornoMatch,
  bodyMatch,
  mockValidToken,
 } from './mocks/matchesMock';
import * as bcrypt from 'bcryptjs';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando /leaderbord/home', () => {
  afterEach(sinon.restore);
  let chaiHttpResponse: Response;
  beforeEach(() => {
    sinon.stub(Matches, "create").resolves(retornoMatch as Matches);
    // sinon.stub(bcrypt, "compare").resolves(true);
  })
  afterEach(() => {
    (Matches.create as sinon.SinonStub).restore();

  })
  
  it.skip('testa status do /leaderBoard/home', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderbord/home');
    console.log(chaiHttpResponse);
    
    expect(chaiHttpResponse.status).to.be.equal(200);
  })
  it('Testa retorno da rota /leaderboard/home', async () => {
    const result = await chai.request(app).get('/leaderboard/home');
    expect(result.body).to.be.an('array');
    expect(result.status).to.equal(200);
  });
  
  it('Testa retorno da rota /leaderboard/away', async () => {
    const result = await chai.request(app).get('/leaderboard/away');
    expect(result.body).to.be.an('array');
    expect(result.status).to.equal(200);
  });
})