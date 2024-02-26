
function myCourse() {
    document.getElementById("myCourse").classList.toggle("show");
  }

function myTeacher() {
    document.getElementById("myTeacher").classList.toggle("show");
  }

function myOffer() {
    document.getElementById("myOffer").classList.toggle("show");
  }




let Analytics = document.getElementById(`Analytics`);
let Media = document.getElementById(`Media`);
let Criminology = document.getElementById(`Criminology`);
let Language = document.getElementById(`Language`);
let Enginering = document.getElementById(`Enginering`);
let Counceling = document.getElementById(`Counceling`);
let Law = document.getElementById(`Law`);
let Music = document.getElementById(`Music`);
let BIOLOGY_CHEMISRY = document.getElementById(`BIOLOGY_CHEMISRY`);
let Nutrition = document.getElementById(`Nutrition`);
let SportFitness = document.getElementById(`SportFitness`);
let Web_Design = document.getElementById(`Web_Design`);
let Robotics_Engineer = document.getElementById(`Robotics_Engineer`);
let Web_Development = document.getElementById(`Web_Development`);
let Phone_Enginering = document.getElementById(`Phone_Enginering`);
let Photographer = document.getElementById(`Photographer`);





  function CourseSearch(){
  let Input = document.getElementById(`Course_search`).value;

  if (Input ==  Analytics || Media || Criminology || Language || Enginering || Counceling || Law || Music || BIOLOGY_CHEMISRY
    || Nutrition || SportFitness || Web_Design || Robotics_Engineer || Web_Development || Phone_Enginering || Photographer){
        document.getElementById(`showCase`).style.display=`none`;
      //  console.log(Photographer.value);
  }if (Input === ``) {
     console.log(`Not-working`)
    //document.getElementById(`showCase`).style.display=`none`;
  } 

  }