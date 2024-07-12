'use strict';

export function newEmployeeData(filter) {
  const newEmployeeForm = document.createElement('form');

  newEmployeeForm.className = 'new-employee-form';

  filter.forEach((el) => {
    const office = [
      'Tokyo',
      'Singapore',
      'London',
      'New York',
      'Edinburgh',
      'San Francisco',
    ];

    const label = document.createElement('label');
    const input = document.createElement('input');

    input.name = el.toLowerCase();

    label.textContent = el + ':';
    label.setAttribute('for', `${el.toLowerCase()}`);
    label.append(input);

    switch (el) {
      case 'Name':
      case 'Position':
        input.type = 'text';

        break;
      case 'Office':
        input.remove();

        const details = document.createElement('select');

        details.id = 'office';

        office.forEach((of) => {
          const options = document.createElement('option');

          options.textContent = of;
          details.append(options);
        });
        label.append(details);
        break;

      case 'Age':
        input.type = 'number';
        input.min = '18';
        input.max = '90';
        break;

      case 'Salary':
        input.type = 'number';

        break;

      default:
        break;
    }

    newEmployeeForm.append(label);
  });

  const btn = document.createElement('button');

  btn.type = 'submit';
  btn.textContent = 'Save to table';

  newEmployeeForm.append(btn);

  document.body.append(newEmployeeForm);

  newEmployeeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const [nameInp, position, office, age, salary] = e.target.elements;

    const newEmployee = {
      nameInp: nameInp.value,
      position: position.value,
      office: office.value,
      age: age.value,
      salary: salary.value,
    };

    createNewEmployeeRow(newEmployee);

    e.target.querySelectorAll('input').forEach((input) => (input.value = ''));
  });
}

function createNewEmployeeRow(newEployeeData) {
  const newRow = document.createElement('tr');

  const dataEntries = Object.entries(newEployeeData);

  dataEntries.forEach(([key, value]) => {
    const tableCell = document.createElement('td');

    tableCell.textContent =
      key === 'salary' ? '$' + (+value).toLocaleString('en-GB') : value;

    newRow.append(tableCell);
  });

  const tBody = document.querySelector('tbody');

  tBody.prepend(newRow);
}
