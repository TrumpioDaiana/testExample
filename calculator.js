const calculator = (() => {
    const add = (a,b) => a + b;
    const sub = (a,b) => a - b;
    const mult = (a,b) => a * b;
    const div = (a,b) => a / b;
    const res = (a,b) => (a - (b*Math.trunc(a/b)));
    return {
        add,
        sub,
        mult,
        div,
        res,
      };
    })();
    
    calculator.add(3,5); 
    calculator.sub(6,2); 
    calculator.mul(14,50);
    calculator.div(20,5);
    calculator.res(16,5); 
    