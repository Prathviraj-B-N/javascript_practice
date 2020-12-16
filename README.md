# javascript_practice

## Node.js
    Is used to run js program outside browser

##### Global Objs to use within node prog files
   _module_:  Each file in node is treated as a module . module object refers to functionality exported by a file.<br/>
   _require()_:   Similar to import ,specifies modules/packages required.<br/>
   _process_:   obj refering to actuall computer process running a node program(interact with cmd-line arg,file sys,os,internet protocols etc...).<br/>


##### How to run js in terminal(local machine)

###### method 1: 
    $ cd directory_name
    $ node filename.js
    
###### method 2:

    $ node
    >.load ./filename.js
    
##### DataTypes
    -Number(with decimals)
    -String
    -Boolean(treu/false)
    -Null(intentional absence of a value)
    -Undefined
    -Symbol
    -Object

##### Declaring variables
    var is used in legacy codes
    let and const are more in use now
    let : can be reAssigned values , un assigned 'let' by default has value undefined
    const : Cannot be reassigned
##### String Interpolation
    let s = 'Like this'
    console.log(`Modify string ${s}`)

##### Misc 1
    console.log(typeof newVariable)
