/* eslint-disable function-paren-newline */
'use strict';

export function sortString(data, index, clickType) {
  if (clickType === 'click') {
    const cellString = [...data].sort((a, b) =>
      a.children[index].textContent.localeCompare(
        b.children[index].textContent,
      ),
    );

    return cellString;
  }

  if (clickType === 'dblclick') {
    const cellString = [...data].sort((a, b) =>
      b.children[index].textContent.localeCompare(
        a.children[index].textContent,
      ),
    );

    return cellString;
  }
}

export function clearNumber(num, index) {
  const cellNumber = num.cells[index].textContent;

  if (cellNumber.includes('$')) {
    const clear = +cellNumber.split('$')[1].split(',').join('');

    return clear;
  } else {
    return +cellNumber;
  }
}

export function sortNumbers(data, index, clickType) {
  if (clickType === 'click') {
    const cellNumber = [...data].sort(
      (a, b) => clearNumber(a, index) - clearNumber(b, index),
    );

    return cellNumber;
  }

  if (clickType === 'dblclick') {
    const cellNumber = [...data].sort(
      (a, b) => clearNumber(b, index) - clearNumber(a, index),
    );

    return cellNumber;
  }
}

export function sortTable(filter, data, index, clickType) {
  let result;

  switch (filter) {
    case 'Name':
    case 'Position':
    case 'Office':
      result = sortString(data, index, clickType);
      break;
    case 'Age':
    case 'Salary':
      result = sortNumbers(data, index, clickType);
      break;

    default:
      break;
  }
  document.querySelector('tbody').append(...result);
}
