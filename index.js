// function scuberGreetingForFeet(){
  // Write your code here!
  function scuberGreetingForFeet(someValue){
    let result
    if(someValue <= 400){
      result = "This one is on me!"
      return result
    }
    else if (someValue >400 && someValue< 2000){
      result = "That will be twenty bucks."
      return result
    }  
    else if (someValue >=2000 && someValue<= 2500){
      result = "I will gladly take your thirty bucks."
      return result
    }
    else {
      result = "No can do."
      return result
    }
  };

function ternaryCheckCity(city){
  return (city == "NYC") ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  // Write your code here
  let result
  switch (tip){
    case "generous":
      result = "Thank you so much."
      return result
    case "not as generous":
      result = "Thank you."
      return result
    default:
      result= "Bye."
      return result
  }
};