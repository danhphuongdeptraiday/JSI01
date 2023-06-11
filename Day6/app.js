fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    let ul = document.createElement("ul");
    for (let i = 0; i < data.results.length; i++) {
      console.log(data.results[i].name);
      let li = document.createElement("li");
      li.innerText = data.results[i].name;
      ul.appendChild(li);
    }
    ul.className = "ulContainer";
    let inputContainer = document.querySelector(".inputContainer");
    inputContainer.appendChild(ul);
  });
