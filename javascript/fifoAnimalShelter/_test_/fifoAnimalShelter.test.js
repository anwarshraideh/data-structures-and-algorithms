'use strict';

const AnimalShelter = require('../fifoAnimalShelter.js');

describe ('test',()=>{

  it('test enqueue',()=>{

    let animalShelter = new AnimalShelter();

    animalShelter.enqueue('cat');
    expect(animalShelter.cat.front.value).toEqual('cat');



  });




});
