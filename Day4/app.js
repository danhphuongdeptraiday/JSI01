fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (res) {
    // => res ()
    return res.json();
  })
  .then(function (data) {
    let object = data[3];
    let html = `
    <div class="container">
    <h2>id : <span>${object.id}</span></h2>
    <h3 class="title">${object.title}</h3>
    <img src="${object.url}" alt="">
    </div>
    
    <div class="container">
    <h2>id : <span>${object.id}</span></h2>
    <h3 class="title">${object.title}</h3>
    <img src="${object.url}" alt="">
    </div>
    
    
    `;

    document.body.innerHTML = html;
  })
  .catch(function (e) {
    console.log(e);
  });
