By default, JavaScript apps run in a single thread.

V8 engine (what's under Node's hood):
- Parses JS;
- Executes JS;
- Manages the call stack;
- Manages the heap memory;
- Performs garbage collection;

Node core APIs:
- fs
- HTTP
- path
- stream
- buffer
- process
- timer

They are written in pure JavaScript

C++ binding
Connects JS facing APIs to native functionality
Allows JS code to communicate with:
- libuv
- OS APIs
- Native libraries

Libuv
- Native library used by Node
- Event loop
- Worker thread pool
- Timers
- Async I/O handling

OS
- Low level work
- Reading files
- Writing files
- Tracking time