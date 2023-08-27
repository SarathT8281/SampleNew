import React from 'react'

function New1() {
    const person ={name: "Sarath",age:27}
    const{name,age}=person;
    console.log(name);
    console.log(age)

    const array=[10,20,30];
    const [first,second,third]=array;
    console.log(first);
    console.log(second);
    console.log(third);
  return (
    <div></div>
  )
}

export default New1