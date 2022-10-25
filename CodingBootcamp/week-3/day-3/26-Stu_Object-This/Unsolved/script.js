// TODO: What does 'this' refer to?
console.log(this); //This refers to the window

// TODO: What does 'this' refer to?
function helloThis() { 
   console.log("Inside this function, this is " + this); // This refers to the object window
   }

// TODO: What will this log? // 20 years
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? // 5000*1.5=5750
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results! // listed in console
helloThis();

// TODO: After commenting, check your results! // Litsed in the console
child.ageTenYears();
investor.investment.investmentGrowth();
