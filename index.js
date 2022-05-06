// Objects
// Objects are collection of properties and methods.

// objects have keys which are converted to string types , The properties nad methods donot follow the insertion order.

//type 1
let mobile = {
    brand : "Samsung",
    weight : "150",
    isWorking : true,
    11 : "android version",
    displayInfo : function(){
        console.log(`the brand of my mobile is ${mobile.brand} and the weight is ${mobile.weight} which is in the woking condition ${mobile.isWorking} 
        ,also with a android version of ${mobile["11"]} `)
    },
    displayInfo1 : function(){
        console.log(`the brand of my mobile is ${mobile.brand}, `)
    }

}
console.log(mobile);
console.log(mobile.displayInfo());
console.log(mobile.displayInfo1());

mobile.camera = "32px";

console.log(mobile);

// type2
let mobile1 = {}; //Empty object currently
// We will start assigning properties to the object using 
mobile1.brand = "OnePlus";
mobile1.weight = 200;
mobile1.isWorking = false;
mobile1["camera"] = "32px";

console.log(mobile1);

//type3

function Mobile(brand,weight,camera){
    this.brand = brand;
    this.weight = weight;
    this.camera = camera;

}

let apple = new Mobile("Apple",180,"32mp");
let vivo = new Mobile("Vivo",250,"64mp")

console.log(apple);
console.log(vivo);
console.log(apple.brand);

console.log(Object.keys(apple));
console.log(Object.values(apple));

for (const [key,value] of Object.entries(apple)){
    console.log(key,value); 
}

// In an object this refers to the object
// when we use this keyword alone, then it points to Global Object
// In a function , this refers to global/parent object

value = 23;
console.log(value);

console.log(this);

// spread

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

console.log(arr1.concat(arr2));

let arr3 = [...arr1,...arr2];
console.log(arr3);




// create two students having preoperties has name , roll no , class, shoe Details using Object Constructor