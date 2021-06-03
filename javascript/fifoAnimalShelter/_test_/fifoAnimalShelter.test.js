'use strict';

const AnimalShelter = require('../fifoAnimalShelter.js');

describe ('test',()=>{

  it('test enqueue a cat',()=>{

    let animalShelter = new AnimalShelter();
    const firstCat = {
      type: 'cat',
      name: 'candy',
    };
    animalShelter.enqueue(firstCat);
    expect(animalShelter.cat.front.value).toEqual(firstCat);

  });

  it('test enqueue a dog',()=>{

    let animalShelter = new AnimalShelter();

    const firstDog = {
      type: 'dog',
      name: 'booby',
    };
    animalShelter.enqueue(firstDog);
    expect(animalShelter.dog.front.value).toEqual(firstDog);


  });

  it('test enqueue others animal',()=>{

    let animalShelter = new AnimalShelter();

    const animal = {
      type: 'duck',
      name: 'lala',
    };
    animalShelter.enqueue(animal);
    expect(animalShelter.enqueue(animal)).toEqual('This shelter can not shelters other animals');

  });

  it('test dequeue ',()=>{

    let animalShelter = new AnimalShelter();


    const firstDog = {
      type: 'dog',
      name: 'booby',
    };

    animalShelter.enqueue(firstDog);
    animalShelter.dequeue('dog');
    expect(animalShelter.dog.isEmpty()).toBeTruthy();

    const firstCat = {
      type: 'cat',
      name: 'candy',
    };
    animalShelter.enqueue(firstCat);
    animalShelter.dequeue('cat');
    expect(animalShelter.cat.isEmpty()).toBeTruthy();


  });


});
