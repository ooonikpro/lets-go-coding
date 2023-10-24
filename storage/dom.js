const storage = localStorage;
const storageKey = 'key-example'

const saveBtn = document.getElementById('save-btn');
const restoreBtn = document.getElementById('restore-btn');
const input = document.getElementById('input');

saveBtn.onclick = () => {
  const value = input.value;

  storage.setItem(storageKey, value);
}

restoreBtn.onclick = () => {
  const restoreData = storage.getItem(storageKey);

  input.value = restoreData;
}