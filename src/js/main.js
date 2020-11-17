import loadData from './components/loadData';
import loadList from './components/loadList';
import showlist from './components/showList';
import showinfo from './components/showInfo';

window.addEventListener("DOMContentLoaded", () => {
    'use strict';

    loadData('https://brightsdays.github.io/vista-test/presentList.json')
        .then(_present => {
            loadList(_present, 'present');
            showinfo(_present, 'present');
        });

    loadData('https://brightsdays.github.io/vista-test/quittingList.json')
        .then(_quitting => {
            loadList(_quitting, 'quit');
            showinfo(_quitting, 'quit');
        });

    showlist();
});