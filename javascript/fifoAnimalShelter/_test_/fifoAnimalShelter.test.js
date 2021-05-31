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

  it('test dequeue ',()=>{

    let animalShelter = new AnimalShelter();
    let animal1 = 'cat';
    let animal2 = 'dog';

    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    animalShelter.dequeue('cat');
    animalShelter.dequeue('dog');

    expect(animalShelter.cat.isEmpty()).toBeTruthy();
    expect(animalShelter.dog.isEmpty()).toBeTruthy();
    // expect(animalShelter.dequeue('duck')).toBeNull();

  });

  it('test dequeue other animal that not exists ',()=>{

    let animalShelter = new AnimalShelter();
    let animal1 = 'cat';
    let animal2 = 'dog';

    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    
    expect(animalShelter.dequeue('duck')).toBeNull();

  });


});
