const fibonacci = (steps) => {
  let step1 = 0;
  let step2 = 1;
  let fibonacci = [0, 1];
  for (let i = 1; i <= steps - 2; i++) {
    let step3 = step1 + step2;
    fibonacci.push(step3);

    step1 = step2;
    step2 = step3;
  }
  console.log(fibonacci);
};
fibonacci(10);
