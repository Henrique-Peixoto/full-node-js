Normal Node: just one thread
Cluster module: when multiple Node worker process are started

Each worker process has its own:
- Runtime
- V8 engine
- Event loop
- Main thread
- Memory