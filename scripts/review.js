let reviews = parseInt(localStorage.getItem('pageLoadCounter')) || 0;

reviews += 1;

localStorage.setItem('pageLoadCounter', reviews);

console.log(`Page loaded ${reviews} times.`);