type User = {
  id: number,
  name: string,
  role: "user" | "admin"
}

const users: User[] = [
  {
    id: 1,
    name: "Henrique",
    role: "admin"
  },
  {
    id: 2,
    name: "User 2",
    role: "user"
  },
  {
    id: 3,
    name: "User 3",
    role: "user"
  }
]

// a "callback" is a function that's passed to another function as an argument
// Node.js callback pattern: callback(error, result)
function findUserWithCallback(
  userId: number, 
  callback: (error: Error | null, user?: User) => void
): void {
  setTimeout(() => {
    const user = users.find(e => e.id === userId);

    if (!user) {
      callback(new Error(`User with id ${userId} not found!`));
      return;
    }

    callback(null, user);
  }, 500);
}

// findUserWithCallback(4, (error, user) => {
//   if (error) {
//     console.log(error.message);
//     return;
//   }

//   console.log(user);
// })

function findUserWithPromise(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(e => e.id === userId);

      if (!user) {
        reject(new Error(`User with ID ${userId} not found!`));
        return;
      }

      resolve(user);
    }, 1000)
  })
}

// "then" is to "resolve" as "catch" is to "reject"
// findUserWithPromise(4)
//   .then((user) => console.log(`Found user: ${user.name}, ${user.id}, ${user.role}`))
//   .catch((error) => console.log(`Promise error: ${error}`));

async function findUserWithAsyncAwait(userId: number): Promise<void> {
  try {
    const user = await findUserWithPromise(userId);
    console.log(`Async/await. User name: ${user.name}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown';
    console.log(`Async/await. Error: ${message}`);
  }
}

findUserWithAsyncAwait(4);