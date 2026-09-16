Blocking: is has to await for the current operation to finish before going to the
next one
Non-blocking: some operation is executed but Node does not need to wait for its
result to proceed with the next operations

readFileSync is blocking. It blocks the main thread until the operation is finished
readFile is non-blocking. The main thread will continue its work while readFile
does its own work in another thread