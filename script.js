//mobile menu

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

//if nothing is inside the online order form, an alert will pop up

function validateForm() {
    let x = document.forms["myForm"]["firstname", "lastname", "phone", "time", "subject"].value;
    if (x == "") {
        alert("Order form must be filled out");
        return false;
    }
   
}

function validateFormSuccess() {
    let x = document.forms["myForm"]["fname", "lname", "phone", "time", "subject"].value;
  
    if (x !== "") {
      alert("Order Placed, Thank You.");
      return false;
    }
  }
  
  for (let i = 0; i < 10; i++) {
    function holiday() {
      document.getElementById("holiday-hours").innerHTML = "<h3>HOURS OF OPERATION</h3> <br> Chrismas day - Closed. <br> Chrismas eve - 8:00am-12:00pm. <br> Thanksgiving day - Closed. <br> Halloween - 8:00am-2:00pm. <br> Veterans Day - 8:00am-2:00pm. <br>";
    }
    console.log("Success");
  }
  
  for (let i = 0; i < 10; i++) {
    function readmore() {
      document.getElementById("about-p").innerHTML = "Café Mozart is an independent Family Owned Bakery. The Hipfl family moved here from Switzerland in 1998, and have been serving Saint Petersburg and the surrounding area for Twenty Years. Baker Hipfl was born in Austria, where learned his trade as a Baker. He worked in Bakeries in Austria, Germany and Switzerland before opening his own Bakery in Zermatt, Switzerland, and finally coming to Florida in 1998. Thus, you can be sure that we are an authentic European Bakery. Our recipes represent the best that Europe offers. All of our products are proudly made on the premises with only the finest ingredients, imported from Europe. We Add No Artificial Colors or Preservatives. We Bake Daily – so everything you see is Fresh and Delicious. Come see our European Breads, Cakes and Pastries, and don’t forget to take home a Vienna Apple Strudel. And there are more surprises when you visit!!!";
    }
    console.log("Success");
  }