const calcu=require('../formula').calcu
const mocha=require('mocha')
const chai=require('chai')


const expect=chai.expect

describe('testing started on formula',()=>{


    it('Test on 0km and 0min',()=>{
        let fare=calcu(0,0)
        expect(fare).to.equal(50)
    })



    it('Test on 10km and 0min',()=>{
        let fare=calcu(10,0)
        expect(fare).to.equal(100)
    })
  
    
})