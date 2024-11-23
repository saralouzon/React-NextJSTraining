 /*Task 2 >>*/
function SumAndAverage (numbers){
  let totalSum = numbers.reduce((sum,num)=> sum+num , 0);
  let average = (totalSum/numbers.length);
  return {totalSum,average}
}
/*for Testing*/ 
const numbersArray = [10, 20, 30, 40,50];
const result = SumAndAverage(numbersArray);
console.log("Total Sum:", result.totalSum); 
console.log("Average:", result.average); 

/*Task 2 <<*/ 


/*Task 3 >>*/
function removeDuplicates(array){
    let uniqueArray =[...new Set(array)];
    return uniqueArray
}
/*for Testing*/
const stringsArray = ["apple", "banana", "apple", "orange", "banana"];
const uniqueStrings = removeDuplicates(stringsArray);
console.log("Unique Strings:", uniqueStrings);

/*Task 3 <<*/