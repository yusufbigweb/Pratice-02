const btn = document.getElementById('add');

function addFn() {
  const inp = document.querySelector('input');
  const inpVal = inp.value;

  console.log(inpVal);
}

btn.addEventListener('click', addFn);
