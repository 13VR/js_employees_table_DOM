'use strict';

export function activeRow(row) {
  row.classList.add('active');
}

export function clearActiveClass() {
  const tBody = document.querySelector('tbody');
  const tableRows = tBody.querySelectorAll('tr');

  tableRows.forEach((row) => {
    row.classList.remove('active');
  });
}
