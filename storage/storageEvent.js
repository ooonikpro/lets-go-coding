const display = document.getElementById('display');
const quota = document.getElementById('quota');

// https://arty.name/localstorage.html
const converToMB = (bytes) => Math.round(bytes / 1e6); // 1000 / 1000

const updateEstimate = () => {
  navigator.storage.estimate().then((estimate) => {
  
    const limit = converToMB(estimate.quota);
    const usage = estimate.usage;

    quota.innerHTML = `{ limit: ${limit}MB; usage: ${usage}bytes; }`;
  });
}

window.addEventListener('storage', (event) => {
  const {key, oldValue, newValue} = event;

  console.log(event);

  display.innerHTML += `{ key: "${key}"; oldValue: "${oldValue}"; newValue: "${newValue}"; }<br/>`;

  updateEstimate();
});

updateEstimate();

