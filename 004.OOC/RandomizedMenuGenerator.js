menu = {
  _courses : { 
    appetizers : [],
    mains : [],
    desserts : [], 
   },
   get appetizers(){
     return this._courses.appetizers
   },

   get mains(){
     return this._courses.mains
   },

   get desserts(){
     return this._courses.desserts
   },
  
   set appetizers(val){
     this._courses.appetizers.push(val)
   },

   set mains(val){
     this._courses.mains.push(val)
   },

   set desserts(val){
     this._courses.desserts.push(val)
   },


   get courses(){
     return {
       appetizers : this._courses.appetizers,
       mains : this._courses.mains,
       desserts : this._courses.desserts,
     }
   },

   addDishToCourse(courseName,dishName ,dishPrice){
     const dish = {
      name : dishName,
      price : dishPrice
     }

     switch(courseName){
       case 'appetizers' : this.appetizers = dish;
       break;

       case 'mains' : this.mains = dish;
       break;

       case 'desserts' : this.desserts = dish;
       break;

       default : console.log('Invalid course')
     }
   },

   getRandomDishFromCourse(courseName){
     let dishes ;

     switch(courseName){
       case 'appetizers' : dishes = this.appetizers;
       break;

       case 'mains' : dishes = this.mains;
       break;

       case 'desserts' : dishes = this.desserts;
       break;

       default : console.log('Invalid course name')
     }
    const random_index = Math.floor(Math.random()*dishes.length);
    return dishes[random_index];
   },

   getRandomMeal(){
     const appetizer = this.getRandomDishFromCourse('appetizers')
     const main =this.getRandomDishFromCourse('mains')
     const dessert = this.getRandomDishFromCourse('desserts')

     return `Your Appetizer is ${appetizer.name} , main course will be ${main.name} and dessert will be ${dessert.name} .\nTotal : ${appetizer.price + dessert.price + main.price }`
   }
}
menu.addDishToCourse('appetizers', 'french fries', 50)
menu.addDishToCourse('appetizers', 'katori chaat', 50)
menu.addDishToCourse('appetizers', 'kebab', 90)

menu.addDishToCourse('mains', 'taalli', 120)
menu.addDishToCourse('mains', 'jeera rice', 80)
menu.addDishToCourse('mains', 'biriyani', 110)

menu.addDishToCourse('desserts', 'cake', 80)
menu.addDishToCourse('desserts', 'ice-cream', 50)
menu.addDishToCourse('desserts', 'gulab jamoon', 150)


console.log(menu.getRandomMeal())
