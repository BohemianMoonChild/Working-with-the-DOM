const newTitle = document.querySelector('#main-title')
newTitle.textContent = "Muscle Car; Muscle Life";


const newBackgroundColor = document.querySelector('body')
document.body.style.backgroundColor = 'seagreen'


const favThings = document.querySelector('#favorite-things');
favThings.removeChild(favThings.lastElementChild);


const newFontsize = document.querySelectorAll('.special-title');
newFontsize.forEach(title => {
    title.style.fontSize = '2rem';
});

const list = document.getElementById('past-races');
const removeChicago = list.childNodes[7]; //should be list [4] but only [7] "Chicago"
removeChicago.parentNode.removeChild(removeChicago);



const listContainer = document.getElementById('past-races')
const listElement = document.createElement('li');
listContainer.appendChild(listElement);
listElement.textContent = 'Arizona'



const main = document.getElementById('.main')


const blogPost = document.createElement('div');
blogPost.className = 'blog-post purple';
const h1 = document.createElement('h1');
const p = document.createElement('p');


h1.textContent = 'Tucson'
p.textContent = 'I RACED THROUGH A SAND STORM AND WON!'


main.appendChild(blog-post);
blogPost.appendChild(h1);
blogPost.appendChild(p);
  
  


