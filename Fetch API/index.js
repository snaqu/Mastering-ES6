const list = document.querySelector(".list");
const btn = document.querySelector("#listBtn");

btn.addEventListener("click", getUsers);

function getUsers() {
    fetch('people.json')
        .then(res => res.json())
        .then(data => {
            let output = ``;
            data.forEach(element => {
                output += `
                <ul>
                    <li>ID: ${element.id}</li>
                    <li>Name: ${element.name}</li>
                    <li>Email: ${element.email}</li>
                </ul>
                `;
            });
            list.innerHTML = output;
        })
};

function fetchApi() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        //  I can use variables from form below
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
}