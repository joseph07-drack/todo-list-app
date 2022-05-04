//eslint-disable-line
import LocalStorage from './localStorage.js';

export const taskBox = document.querySelector('.tasks');
export const userTask = document.querySelector('.add-input');
export const clearAllCompletedBtn = document.querySelector('.clearAll');
export let todos = LocalStorage.get() || [];
