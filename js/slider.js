//------------------------slide---------------------------

const $slidePage = document.querySelectorAll('.slider li');
const slideNum = $slidePage.length;

const checked = document.querySelectorAll('active');
const $slideBtn = document.querySelectorAll('.slideBtn ul li');

/*
$slideBtn.forEach((element)=>{
  element.addEventListener('click', ()=>{
    // console.log(element.value);
    if(checked){
      for(let i=0;i<slideNum;i++){
        $slideBtn[i].className='';
        $slidePage[i].className='';
      };
      $slidePage[element.value].className='visible';
      element.className='active';
    }else{
      $slidePage[element.value].className='visible';
      element.className='active';
    }
  });
}); */

for(let i=0;i<slideNum;i++){
  $slideBtn[i].index=i;
  // console.log($slideBtn[i].index);
  $slideBtn[i].addEventListener("click", function(e){
    for(let j=0;j<slideNum;j++){
      $slidePage[j].classList.remove("visible");
      $slideBtn[j].classList.remove("active");
    };
    e.target.classList.add("active");
    $slidePage[e.target.index].classList.add("visible");
  });
}

// $slideBtn.forEach((e)=>{
//   e.addEventListener("click", () => {
//     for(let j=0;j<slideNum;j++){
//       $slidePage[j].classList.remove("visible");
//       // $slideBtn[j].classList.remove("active");
//     };
//     // e.currentTarget.classList.add('active');
//     console.log(e)
//   });
// })
const autoPlay = () => {
  
  for(let k=0;k<slideNum;k++){
    if($slidePage[k].className == "visible"){
      // console.log("pass1");
      for(let j=0;j<slideNum;j++){
        $slidePage[j].classList.remove("visible");
        $slideBtn[j].classList.remove("active");
      };
      $slidePage[k+1].classList.add("visible");
      $slideBtn[k+1].classList.add("active");
      break;
    } else if($slidePage[2].className == "visible"){
      for(let j=0;j<slideNum;j++){
        $slidePage[j].classList.remove("visible");
        $slideBtn[j].classList.remove("active");
      };
      // console.log("pass2");
      $slidePage[0].classList.add("visible");
      $slideBtn[0].classList.add("active");
      break;
    }
  };
};

setInterval(()=>autoPlay(),4000);

//---------------------mobile menu toggle-----------------------
const $mobileMenu = document.querySelectorAll('#mobile_menu > li');
$mobileMenu.forEach((e)=>{
  e.addEventListener('click',()=>{
    
    e.classList.toggle('open');
  })
})


const $mobileBar = document.querySelector('#nav_mobile');
const $mobile_ham = document.querySelector('.ham_button');
const $overlay = document.querySelector('.overlay');

$mobile_ham.addEventListener('click', ()=>{
  $mobile_ham.classList.toggle('draw');
  document.body.classList.toggle('draw');
  // if ($mobile_ham.classList.contains('draw')) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = '';
  // }
  $mobileMenu.forEach((all)=>{
    all.classList.remove('open');
  })
  setTimeout(()=>{
    $mobileBar.classList.toggle('draw');
    $overlay.classList.toggle('draw');
  },300);
});

$overlay.addEventListener('click',()=>{
  $mobileMenu.forEach((all)=>{
    all.classList.remove('open');
  })
  $mobile_ham.classList.remove('draw');
  $mobileBar.classList.remove('draw');
  $overlay.classList.remove('draw');
  document.body.classList.remove('draw');

})

//-------------------scroll effect------------------
const $bannerText =  document.querySelector('.bannerText');
const $clinicTile = document.querySelector('#clinic ul');
const $board_wrap = document.querySelectorAll('.board_wrap');
const floor = [];
floor.push(document.querySelector('#floor p'));
floor.push(document.querySelector('#floor h3'));
floor.push(document.querySelector('#floor a'));

const heightCheck = (height, element, offset) => {
  if(pageYOffset + window.innerHeight >= height){
    element.classList.add('show');
  } else if(window.innerWidth <= 480 && pageYOffset + window.innerHeight >= height-offset) {
    element.classList.add('show');
  }
}
document.addEventListener('DOMContentLoaded', ()=>{
  heightCheck(500, $bannerText);
  heightCheck(900, $clinicTile, 500);
  document.addEventListener('scroll', () => {
    heightCheck(900, $clinicTile, 500);
    $board_wrap.forEach((e) => {
      heightCheck(1900, e, 700);
    })
    for (let floorE of floor) {
      heightCheck(2300, floorE, 800);
    }
    
  })
})