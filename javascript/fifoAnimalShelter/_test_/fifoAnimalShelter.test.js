'use strict';

const AnimalShelter = require('../fifoAnimalShelter.js');

describe ('test',()=>{

  it('test enqueue a cat',()=>{

    let animalShelter = new AnimalShelter();
    // let animal = 'cat';
    // animalShelter.enqueue(animal);
    // expect(animalShelter.cat.front.value).toEqual(animal);
    const firstCat = {
      type: 'cat',
      name: 'candy',
    };
    // Act
    animalShelter.enqueue(firstCat);
    // Assert
    expect(animalShelter.cat.front.value).toEqual(firstCat);
    // expect(animalShelter.dogQueue.front).toBeNull();

  });

  it('test enqueue a dog',()=>{

    let animalShelter = new AnimalShelter();
    // let animal = 'dog';
    // animalShelter.enqueue(animal);
    // expect(animalShelter.dog.front.value).toEqual(animal);

    const firstDog = {
      type: 'dog',
      name: 'booby',
    };
    // Act
    animalShelter.enqueue(firstDog);
    // Assert
    expect(animalShelter.dog.front.value).toEqual(firstDog);
    // expect(animalShelter.catQueue.front).toBeNull();


  });

  it('test enqueue others animal',()=>{

    let animalShelter = new AnimalShelter();
    // let animal = 'duck';

    const animal = {
      type: 'duck',
      name: 'lala',
    };
    animalShelter.enqueue(animal);
    expect(animalShelter.enqueue(animal)).toEqual('This shelter can not shelters other animals');

  });

  it('test dequeue ',()=>{

    let animalShelter = new AnimalShelter();
    // let animal1 = 'cat';
    // let animal2 = 'dog';

    // animalShelter.enqueue(animal1);
    // animalShelter.enqueue(animal2);
    // animalShelter.dequeue('cat');
    // animalShelter.dequeue('dog');

    // expect(animalShelter.cat.isEmpty()).toBeTruthy();
    // expect(animalShelter.dog.isEmpty()).toBeTruthy();

    const firstDog = {
      type: 'dog',
      name: 'booby',
    };

    animalShelter.enqueue(firstDog);
    animalShelter.dequeue('dog');
    expect(animalShelter.dog.isEmpty()).toBeTruthy();


    // Assert
    // expect(result).toEqual(dog1);
    // expect(animalShelter.dogQueue.front).toBeNull();
    // expect(animalShelter.catQueue.front).toBeNull();
    const firstCat = {
      type: 'cat',
      name: 'candy',
    };
    animalShelter.enqueue(firstCat);
    animalShelter.dequeue('cat');
    expect(animalShelter.cat.isEmpty()).toBeTruthy();
    // expect(result).toEqual(cat1);
    // expect(animalShelter.catQueue.front).toBeNull();
    // expect(animalShelter.dogQueue.front).toBeNull();

  });

  // it('test dequeue other animal that not exists ',()=>{

  //   let animalShelter = new AnimalShelter();
  //   let animal1 = 'cat';
  //   let animal2 = 'dog';

  //   animalShelter.enqueue(animal1);
  //   animalShelter.enqueue(animal2);

  //   expect(animalShelter.dequeue('duck')).toBeNull();

  // });


});
