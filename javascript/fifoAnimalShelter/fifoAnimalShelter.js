'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues.js');

class AnimalShelter {

  constructor(){

    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal){

    if (animal.type === 'dog'){
      this.dog.enqueue(animal);
    }
    else if (animal.type === 'cat'){
      this.cat.enqueue(animal);
    }
    else
    {
      return ('This shelter can not shelters other animals');
    }

  }


  dequeue(pref)
  {

    if (pref === 'dog'){
      this.dog.dequeue();
    }
    else if (pref === 'cat'){
      this.cat.dequeue();
    }
    else
    {
      return null;
    }
  }


}

module.exports = AnimalShelter;
