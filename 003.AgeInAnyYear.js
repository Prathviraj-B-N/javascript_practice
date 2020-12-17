const curYear = 2020

const howOld = (age,year) => {
  let birthYear = curYear - age;
  let res = year - birthYear
  if(res < 0){
    return `The year ${year} was ${-1*res} years before you were born`
  }
  else if(res < age){
    return `You were ${res} in the year ${year}`
  }
  else{
    return `You will be ${res} in the year ${year}`
  }
}

//Enter your age and year in which you want your age
console.log(howOld(20,1998))
