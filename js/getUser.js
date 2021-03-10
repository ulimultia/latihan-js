async function getUser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    console.log(data)
    showUser(data);
    // console.log(response.json())
    // return response.json()
    showTable(data);
}

getUser()
    // console.log(getUser());


// pertanyaannya kenapa promisenya hilang kalo pale then aja, 
// klo gak pake then gak bisa ilang
// jadi kalo mau cek panjang array pasti gak bisa karena undefined
// tapi kalau di return bukan dari then gak bisa
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(users) {
//         showUser(users);
//     })

function showUser(users) {
    var konten = document.getElementById("coba");
    // console.log(users.length)
    for (let i = 0; i < users.length; i++) {
        var isi = document.createElement("li");
        isi.className = "list-group-item";
        isi.style.color = "black";
        isi.innerHTML =
            users[i].name + ' || ' + users[i].email;
        konten.appendChild(isi);
    }

}

function showTable(users) {
    // console.log("table", users)
    let print = ''
    for (let i = 0; i < users.length; i++) {
        print += `
                <tr>
                    <td>${i+1}</td>
                    <td>${users[i].name}</td>
                    <td>${users[i].address.city}</td>
                    <td>${users[i].email}</td>
                </tr>
        `
    }

    console.log("isi print:", print);
    const baris = document.getElementById("coba-table");
    baris.innerHTML = print
}

// showUser(getUser());