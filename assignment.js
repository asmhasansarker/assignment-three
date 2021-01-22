// https://github.com/asmhasansarker/assignment-three

// problem one
// ----------------------------------

function kilometerToMeter(km){

    var meter = 0;

    if(km<0)
    {
        return "Distance cannot be negative.";
    }
    else
    {
        meter = km*1000; 
        return meter; 
    }
    
}

var result = kilometerToMeter(2);
console.log(result);



// problem two 
// ----------------------------------

function budgetCalculator(watch,phone,laptop){
    var totalPrice = 0;
    if(watch<0 || phone<0 || laptop<0)
    {
        return "Price cannot be negative";
    }
    else
    {
        totalPrice = (watch*50) + (phone*100) + (laptop*500);
        return totalPrice;
    }
}

var result = budgetCalculator(1,1,2);
console.log(result)







// problem three 
// ----------------------------------

function hotelCost(days){

    var totalCost = 0;
    var firstPart = 0;
    var secondPart = 0;
    var thirdPart = 0;
    var remainingDays = 0;
    if(days<0)
    {
        return "Days cannot be negative.";
    }
    else if(days <= 10)
    {
        totalCost = days * 100;
        return totalCost;
    }
    else if(days <= 20)
    {
        firstPart = 10 * 100;
        remainingDays = days - 10;
        secondPart = remainingDays * 80;
        totalCost = firstPart + secondPart;
    }
    else
    {
        firstPart = 10 * 100;
        secondPart = 10 * 80;
        remainingDays = days - 20;
        thirdPart = remainingDays * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
}

var result = hotelCost(28);
console.log(result);




// problem four 
// ----------------------------------

function megaFriend(name){

    if(name.length<=0)
    {
        return "Array cannot be empty.";
    }
    else
    {
        var max = name[0].length;
        var position = 0;
        
        
        for(var i = 0; i<name.length; i++)
        {
            var element = name[i].length;
            if(element > max)
            {
                max = element;
               position = i;
            }
        }
        var largeName = name[position];
        return largeName ;

    }
   
}

var friends = ["A","Ab","Abc","Abcd"];
var result = megaFriend(friends);
console.log(result);



