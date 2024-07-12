'use strict';

export function dblClickChange(cell, oldValue, inp) {
  // const cell = e.target;
  // const oldValue = e.target.innerHTML;

  // const inp = document.createElement('input');

  inp.addEventListener('keyup', (keybEvent) => {
    if (keybEvent.key === 'Enter') {
      const newValue = oldValue.includes('$')
        ? '$' + (+keybEvent.target.value).toLocaleString('en-GB')
        : keybEvent.target.value;

      if (keybEvent.target.value === oldValue || !keybEvent.target.value) {
        cell.textContent = oldValue;
      } else {
        cell.textContent = newValue;
      }

      cell.classList.remove('cell-input');
      inp.remove();

      return;
    }

    if (keybEvent.key === 'Escape') {
      cell.textContent = oldValue;
      cell.classList.remove('cell-input');
      inp.remove();
    }
  });

  inp.addEventListener('blur', (blurEvent) => {
    const newValue = oldValue.includes('$')
      ? '$' + (+blurEvent.target.value).toLocaleString('en-GB')
      : blurEvent.target.value;

    if (inp.value === oldValue || !inp.value) {
      cell.textContent = oldValue;
    } else {
      cell.textContent = newValue;
    }

    cell.classList.remove('cell-input');
    inp.remove();
  });

  cell.textContent = '';
  cell.classList.add('cell-input');

  cell.append(inp);
  inp.focus();
}
