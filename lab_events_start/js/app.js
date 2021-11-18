document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const button = document.querySelector('#button');
  // button.addEventListener("click",handleClick);

  // const textInput = document.querySelector("#title");
  // textInput.addEventListener("title", handleInput);

  // const selector = document.querySelector('#select');
  // selector.addEventListener("change",handleSelectChange)

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  
});

const handleFormSubmit = function (event){
  event.preventDefault();
  console.log('you typed');
  const list = document.querySelector("#reading-list")
  const newListItem  = document.createElement('li')
  newListItem.textContent = `Title:${event.target.title.value}
                                author:${event.target.author.value}
                                catagory:${event.target.category.value}`;
                                
  list.appendChild(newListItem)
  document.getElementById('new-item-form').reset()
};


// const handleInput = function(event){
//   console.log("input has been put in");
  // get value of input.
  // update the paragraph text.
  // console.log(event.target.value);
  // const resultParagraph = document.querySelector("#");
  // resultParagraph.textContent = `you typed: ${event.target.value}`;
// };