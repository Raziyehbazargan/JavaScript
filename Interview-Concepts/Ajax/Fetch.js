//Is a promise based API that lets us do Ajax requests without all the fuss associated with XMLHttpRequest.
//GET
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => res.map(user => user.username))
    .then(userNames => console.log(userNames));



//POST, PUT, DELETE
const myPost = {
    title: 'A post about true facts',
    body: '42',
    userId: 2
  };

const options = {
    method: 'POST',
    body: JSON.stringify(myPost),
    headers: {
        'Content-Type': 'application/json'
    }
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
.then(res => res.json())
.then(res => console.log(res));


async function fetchUsers(endpoint) {
    const res = await fetch(endpoint);
    if (!res.ok)
         throw new Error(res.status);

    const data = await res.json();
    return data;
}

fetchUsers('https://jsonplaceholder.typicode.com/users')
.then(data => {
    console.log(data.map(user => user.username));
})