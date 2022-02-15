function rp(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(12);
    }, 600);
  });
}


function* func(){
  const s = yield rp();
}

// s.next().value.then(d => {
//   console.log(d)
// })

async function f(){
  const s = func();
  const ff = await s.next().value
  console.log(ff)
}

f();
