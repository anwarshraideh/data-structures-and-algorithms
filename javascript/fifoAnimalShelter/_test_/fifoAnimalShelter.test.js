'use strict';

const AnimalShelter = require('../fifoAnimalShelter.js');

describe ('test',()=>{

  it('test enqueue a cat',()=>{

    let animalShelter = new AnimalShelter();
    let animal = 'cat';
    animalShelter.enqueue(animal);
    expect(animalShelter.cat.front.value).toEqual(animal);


  });

  it('test enqueue a dog',()=>{

    let animalShelter = new AnimalShelter();
    let animal = 'dog';
    animalShelter.enqueue(animal );
    expect(animalShelter.dog.front.value).toEqual(animal);


  });

  it('test enqueue others animal',()=>{

    let animalShelter = new AnimalShelter();
    let animal = 'duck';
    animalShelter.enqueue(animal );
    expect(animalShelter.enqueue(animal)).toEqual('This shelter can not shelters other animals');

  });


});
