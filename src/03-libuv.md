Libuv is a native library used by Node
It helps Node to handle async operations across different OS systems

What is does/takes care of
- Event loop
- Worker thread pool
- Timers
- Async I/O operations

V8 does not provide
- fs operations
- Network socket handling
- Timers
- General event loop for Node JS APIs

Node needs another layer to coordinate these runtime features.
What these other layers is
- Event loop
- Complete I/O operations
- Timers: check which timers are in ready state
- Pending callbacks
- Socket activity
- Thread pool
  - Libuv provides a shared worker thread pool
  - This pool is used only by those operations that cannot be handled efficiently
    - File system operations
    - Cryptography
    - Crompression
- Timers
  - Libuv helps Node track timers and implement them, determining when the timer 
  has become available to execute
  - Ie. a 5 second timer does not mean that JS's main thread sleeps for 5 seconds
  - Runtime record the timer and continue processing other tasks
