const destinationBtns = document.querySelectorAll('.destination-btns');
const destinationSub = document.querySelector(".destination-content_subheader");
const destinationText = document.querySelector(".destination-content_text");
const destinationStatDistance = document.querySelector(".stat_distance");
const destinationStatTime = document.querySelector(".stat_time");
const destinationImg = document.querySelector(".destination-img");

const crewBtns = document.querySelectorAll('.crew-btns');
const crewName = document.querySelector('.crew_name');
const crewTitle = document.querySelector('.crew_subheader');
const crewInfo = document.querySelector('.crew_info');
const crewImg = document.querySelector('.crew_img');

const techBtns  = document.querySelectorAll('.tech-btn');
const techSubheader  = document.querySelector('.tech-content_subheader');
const techInfo  = document.querySelector('.tech-content_info');
const techImg  = document.querySelector('.tech-content_img');

let destinations = [];

// Fetching Data from Json File
fetch('data.json').then(response => response.json())
  .then(data => {

    const destinations = data.destinations;
    const crew = data.crew;
    const technology = data.technology;

    destinationBtns.forEach(button =>{
      
    button.addEventListener('click', (e) =>{
    e.preventDefault();

    destinationBtns.forEach(b => b.classList.remove('active-link'))

    button.classList.add('active-link');
    selected = button.value; 

// Different Destinations Buttons Functionality
    destinations.forEach(destination =>{
      if (selected === destination.name) {
        
        destinationSub.textContent = destination.name
        destinationText.textContent = destination.description
        destinationStatDistance.textContent = destination.distance
        destinationStatTime.textContent = destination.travel
        destinationImg.src = destination.images.png
      }
      })
   
    })

})

    // Crew Buttons Functionality
    crewBtns.forEach(crewButton =>{
    crewButton.addEventListener('click', (e) =>{
      
    let selectedCrew = crewButton.value; 
    crewBtns.forEach(b => b.classList.remove('active'))

    crewButton.classList.add('active');

      crew.forEach(crewMember =>{
      if (selectedCrew === crewMember.name) {
        crewName.textContent = crewMember.name
        crewInfo.textContent = crewMember.bio
        crewTitle.textContent = crewMember.role
        crewImg.src = crewMember.images.png
      }
      })
      
    })
    })
    
// Tech Section Buttons Functionality

techBtns.forEach(techBtn =>{

  techBtn.addEventListener('click' , (e) =>{
     tech = techBtn.value;
    
    techBtns.forEach(tbtn =>{tbtn.classList.remove('active')})

    techBtn.classList.add('active');

    technology.forEach(techType =>{
      if (tech == techType.name) {
        techSubheader.textContent = techType.name;
        techInfo.textContent = techType.description;
        techImg.src = techType.images.landscape
      }
    })

  })
})


  })





  .catch(error => {
    console.error('Error loading JSON:', error);
  });