import './style.css'


const cats = import.meta.glob('./pics/*.jpg');
console.log(cats);

let imgHTML = '';
for(const cat in cats) {
  console.log(cat);
  imgHTML += `<img src="${cat}">`
}

document.querySelector('#app').innerHTML = `
  <h1>Hello Cats</h1>
  ${imgHTML}
`




// from the docs, honestly I don't get it
for (const path in cats) {
  cats[path]().then((mod) => {
    console.log(path, mod)
  })
}

// another example: const modules = import.meta.globEager('./dir/*.js')