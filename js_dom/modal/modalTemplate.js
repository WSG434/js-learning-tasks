const openButton = document.querySelector("#openOverlay");
const successModal = createModal("The message has been sent, thank you!")
const body = document.body;


openButton.addEventListener("click", e => {
  body.appendChild(successModal);
})

function createModal(content){
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");

  overlayElement.innerHTML = template.innerHTML;

  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  })


  const closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overlayElement);

  })

  const contentElement = overlayElement.querySelector(".content");
  contentElement.innerHTML = content;

  return overlayElement;
}




// openButton.addEventListener("click", e => {
//   body.appendChild(successModal);
// })


// function createModal (content) {

//   const overlayElement = document.createElement("div");
//   overlayElement.classList.add("overlay");

//   overlayElement.addEventListener("click", e => {
//     if (!e.target.classList.contains("content")) {
//       closeElement.click();
//     }
    
//     // if (e.target === overlayElement){
//     //   closeElement.click();
//     // }
//   })

//   const containerElement = document.createElement("div");
//   containerElement.classList.add("modal-container");

//   const contentElement = document.createElement("div");
//   contentElement.classList.add("content");

//   contentElement.innerHTML = content;

//   const closeElement = document.createElement("a");
//   closeElement.classList.add("close");
//   closeElement.textContent = "x";
//   closeElement.href = "#";

//   closeElement.addEventListener("click", e => {
//     e.preventDefault();
//     body.removeChild(overlayElement);

//   })

//   overlayElement.appendChild(containerElement);
//   containerElement.appendChild(closeElement);
//   containerElement.appendChild(contentElement);
  
//   return overlayElement;

// }

