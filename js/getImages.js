async function getImages() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    let data = await response.json()
    console.log(data)
    showImages(data);
}


function showImages(images) {
    // console.log(images)
    let output = '';
    console.log(images.length);

    for (let i = 0; i < 12; i++) {
        output += `
                    <div class="col-md-4 mb-4">
                        <div class="card" style="height:600px; max-width:400px">
                            <img src="${images[i].url}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"><b>${images[i].title}</b></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                `
    }

    console.log(output);
    const divCard = document.getElementById("card-imgs");
    divCard.innerHTML = output
}
getImages()

// async function getImages1() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/photos')
//     let data = await response.json()
//     return data;
// }


// var data = getImages1();

// console.log("cobacoba", data);
// console.log("cobapanjang", data.length);