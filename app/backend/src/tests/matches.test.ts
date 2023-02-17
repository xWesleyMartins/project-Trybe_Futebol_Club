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

describe('Testando /matches', () => {
  let chaiHttpResponse: Response;
  // beforeEach(() => {
  //   // sinon.stub(Matches, "create").resolves(retornoMatch as Matches);
  //   // sinon.stub(bcrypt, "compare").resolves(true);
  // })
  // afterEach(() => {
  //   (Matches.create as sinon.SinonStub).restore();
  //   // (bcrypt.compare as sinon.SinonStub).restore();
  // })
  
  it.skip('testa se é possivel fazer login com dados corretos', async () => {
    chaiHttpResponse = await chai.request(app).post('/matches').set('Authorization', mockValidToken).send(bodyMatch);
    console.log(chaiHttpResponse);
    
    expect(chaiHttpResponse.status).to.be.equal(201);
    expect(chaiHttpResponse.body).to.be.deep.equal(retornoMatch);
  })

  it('testa retorno de /matches?inProgress=true', async () => {
    const result = await chai.request(app).get('/matches?inProgress=true');
    expect(result.status).to.equal(200);
  });
  it('testa retorno de /matches?inProgress=false', async () => {
    const result = await chai.request(app).get('/matches?inProgress=false');
    expect(result.status).to.equal(200);
  });
  it('testa a /matches/1/finish e se é finalizado ', async () => {
    const result = await chai.request(app).patch('/matches/1/finish')
    expect(result.status).to.equal(200);
  });

  it('Testa retorno de Erro quando nao passado o token', async () => {
    const result = await chai.request(app).post('/matches').send({
      homeTeamId: 300,
      awayTeamId: 8,
      homeTeamGoals: 2,
      awayTeamGoals: 2
    });
    expect(result.status).to.equal(401);
  });
})
