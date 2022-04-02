//Couldn't remember if these needed to be in functions.
//I tried putting them in functions, but I could not get them to work.
//In their current state they are indeed functional however

//Clone
const eventDiv = document.querySelectorAll(".original-container div")
const areaToCloneTo = document.querySelector(".copy-container")

eventDiv.forEach(element => element.addEventListener("click", (evt) => {
    console.log(evt)
    let cloneItem = evt.target.parentElement.outerHTML;
    areaToCloneTo.insertAdjacentHTML ("beforeend", cloneItem);
}))

//Delete
const deleteClonesButton = document.querySelector("button")

deleteClonesButton.addEventListener("click", (evt) => {
    console.log(evt)
    areaToCloneTo.innerHTML = '';
})