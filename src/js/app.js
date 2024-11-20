const tabTitleButtons = document.querySelectorAll(".tabs__title");
 const tabContents = document.querySelectorAll(".tabs__content"); 

tabTitleButtons.forEach((tabButton, index)=>{
    tabButton.addEventListener("click", (e)=>{
       //removed active class from each classes for article and buttons first 
       tabContents.forEach((content) => content.classList.remove("tabs__content--active"));

       tabTitleButtons.forEach((button) => button.classList.remove("tabs__title--active"));
        
        //targets whatever what is clicked and then add the active class again for the one that is active , this is for the buttons not the content
      e.target.classList.add("tabs__title--active");

        //can not use e, as it refers to the buttons now. uses sqaure bracckets to target index
        tabContents[index].classList.add("tabs__content--active");


   });

});

// const tabTitleButtons = document.querySelectorAll(".tabs__title");
// const tabContents = document.querySelectorAll(".tabs__content");

// tabTitleButtons.forEach((tabButton, index) => {
//   tabButton.addEventListener("click", (e) => {
//     tabContents.forEach((content) =>
//       content.classList.remove("tabs__content--active")
//     );
//     tabTitleButtons.forEach((button) =>
//       button.classList.remove("tabs__title--active")
//     );

//     e.target.classList.add("tabs__title--active");
//     tabContents[index].classList.add("tabs__content--active");
//   });
// });

