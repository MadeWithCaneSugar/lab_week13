//Clone
const clickableDiv = document.querySelectorAll('.original-container')
const areaCopyTo = document.querySelectorAll('.copy.container')

elementCloner (clickedElement); {
    var cloneOfElement = document.querySelector(clickedElement)
    cloneOfElement = cloneOfElement.cloneNode(true);

    insertAdjacentHTML
}

elementCloner()

//Clone w/ Morteza
const eventDiv = document.querySelectorAll('.original-container div')
const copyArea = document.querySelector('.copy-container')

eventDiv.forEach(element => element.addEventListener('click', (evt) => {
    let cloneMaterial = evt.target.parentElement.outerHTML;
    copyArea.insertAdjacentHTML ("beforeend", cloneMaterial);
}))