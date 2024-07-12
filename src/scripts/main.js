'use strict';

import { sortTable } from './functions.js';
import { newEmployeeData } from './new_employee.js';
import { activeRow, clearActiveClass } from './active_row.js';
import { dblClickChange } from './dbl_click_change.js';
import { validation } from './validation.js';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableBodyRow = tableBody.querySelectorAll('tr');

const employee = ['Name', 'Position', 'Office', 'Age', 'Salary'];

tableHead.addEventListener('click', (e) => {
  const clickType = e.type;
  const headerIndex = e.target.cellIndex;
  const headerCellName = e.target.innerHTML;

  sortTable(headerCellName, tableBodyRow, headerIndex, clickType);
});

tableHead.addEventListener('dblclick', (e) => {
  const clickType = e.type;
  const headerIndex = e.target.cellIndex;
  const headerCellName = e.target.innerHTML;

  sortTable(headerCellName, tableBodyRow, headerIndex, clickType);
});

tableBody.addEventListener('click', (e) => {
  clearActiveClass();
  activeRow(e.target.parentElement);
});

newEmployeeData(employee);

const inputs = document.querySelectorAll('input');

inputs.forEach((inp) => {
  inp.dataset.qa = inp.name;
});

const select = document.querySelector('select');

select.dataset.qa = select.id;

// VALIDATION

const submitButton = document.querySelector('button');

inputs.forEach((el) => {
  el.addEventListener('input', (e) => {
    const inputName = e.target.name;
    const inpTarget = e.target;

    const label = e.target.parentElement;

    validation(inputName, inpTarget, label, submitButton);
  });
});

// TABLE DOUBLE CLICK CHANGE

tableBody.addEventListener('dblclick', (e) => {
  const cell = e.target;
  const oldValue = e.target.innerHTML;

  const inp = document.createElement('input');

  dblClickChange(cell, oldValue, inp);
});
