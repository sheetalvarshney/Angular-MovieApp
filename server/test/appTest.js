var supertest =require('supertest');
var express =require('express');
var index =require('../routes/index');
let app=require('../app');
var expect=require('chai').expect;
var should=require('chai').should();
var assert=require('chai').assert;
var sinon=require('sinon');
var schema=require('../model/schema');

let getStub=sinon.stub(schema,'find');
let postStub=sinon.stub(schema,'insertMany');

let url=supertest("http://localhost:3030");

describe('http method test',()=>{	
	beforeEach(()=>{
		getStub.yields(null,[{id:'66759',title:'babyDriver',poster_path:'/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg',release_date:'2017-06-28',vote_count:127}]);
		postStub.yields(null,[{id:'66759',title:'babyDriver',poster_path:'/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg',release_date:'2017-06-28',vote_count:127}]);
		});

	it('get method',(done)=>{
		 url
		.get('/')
		.expect('Content-Type',/json/)
		.end((err,res)=>{
			console.log(res);
			
			assert.equal(res.body[0].title,'babyDriver');
			res.body[0].title.should.be.a('string');

			done();
		});
	});
	
	it('post method',(done)=>{
		 url
		.post('/')
		.expect('Content-Type',/json/)
		.send({id:'66759',title:'babyDriver',poster_path:'/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg',release_date:'2017-06-28',vote_count:127})
		.end((err,res)=>{
			assert.equal(res.body[0].title,'babyDriver');
			done();
		});
	});
});
	