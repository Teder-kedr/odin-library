const table = document.querySelector("tbody");
const buttonAdd = document.querySelector("button.add");

const mics = [];

class Mic {
  constructor(name, type, pattern, price) {
    this.name = name;
    this.type = type;
    this.pattern = pattern;
    this.price = price;
    mics.push(this);
  }
}

function addMic() {
  const name = prompt("Name:");
  const type = prompt("Type: (dynamic, condenser etc.)");
  const pattern = prompt("Polar Pattern: (cardioid, omni-directional etc.)");
  const price = prompt("Price in USD:");

  if (name !== null && type !== null && pattern !== null && price !== null) {
    new Mic(name, type, pattern, price);
  }

  displayMics();
}

function displayMics() {
  let content = "";

  mics.forEach((mic) => {
    content += `
    <tr">
      <td>${mic.name}</td>
      <td>${mic.type}</td>
      <td>${mic.pattern}</td>
      <td>$${mic.price}</td>
      <td>
        <button type="button" class="remove" data-name="${mic.name}">-</button>
      </td>
    </tr>
    `;
  });

  const tableHeader = `
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Polar Pattern</th>
      <th>Price</th>
    </tr>
  `;
  if (mics.length === 0) {
    table.innerHTML = "";
  } else {
    table.innerHTML = tableHeader + content;
  }

  document.querySelectorAll("button.remove").forEach((btn) => {
    btn.addEventListener("click", removeMic);
  });
}

function removeMic() {
  const nameAttr = this.dataset.name;
  const indexToRemove = mics.indexOf(mics.find((mic) => mic.name === nameAttr));
  mics.splice(indexToRemove, 1);

  displayMics();
}

displayMics();

buttonAdd.addEventListener("click", addMic);
