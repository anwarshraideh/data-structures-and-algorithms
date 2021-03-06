# Implementation: Stacks and Queues

## Challenge
**Features**

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
-This object should be aware of a default empty value assigned to top when the stack is created.
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
-Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
Should raise exception when called on empty stack
- a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
Should raise exception when called on empty stack
- a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
Create a Queue class that has a front property. It creates an empty Queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
- a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
Should raise exception when called on empty queue
- a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
Should raise exception when called on empty queue
- a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency

stacks and queue are the same 

- push , enqueue : time O(1)/space O(1)
- pop , dequeue : time O(1)/space O(1)
- peek : time O(1)/space O(1)
- isEmpty : time O(1)/space O(1) 


## API

- push :  which takes any value as an argument and adds a new node with that value to the top of the stack
- enqueue : which takes any value as an argument and adds a new node with that value to the back of the queue

- pop : that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
- dequeue :  that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

- peek : that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack 

-that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

- isEmpty : that takes no argument, and returns a boolean indicating whether or not the stack or queue is empty.


![stack](../../images/stack.png)
![queue](../../images/queue.png)

