const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const person1 = personFactory('Dai', 27);
  
  console.log(person1.name,'of ',person1.age,' years old ');
  console.log({person1.sayHello});
  
  person1.sayHello();