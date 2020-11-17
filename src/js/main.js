import loadData from './components/loadData';
import loadList from './components/loadList';
import showlist from './components/showList';
import showinfo from './components/showInfo';

window.addEventListener("DOMContentLoaded", () => {
    'use strict';

    const _present = loadData();
    const _quitting = loadData();

    loadList(_present, 'present');
    loadList(_quitting, 'quit');
    showinfo(_present, 'present');
    showinfo(_quitting, 'quit');
    showlist();
});