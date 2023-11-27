'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      immaginiThumb: [
        {
          immagine: 'img/01.webp',
          titolo: 'Spiderman',
          testo: 'descrizione',
        }, {
          immagine: 'img/02.webp',
          titolo: 'Ratchet & Clank',
          testo: 'descrizione',
        }, {
          immagine: 'img/03.webp',
          titolo: 'Fortnite',
          testo: 'descrizione',
        }, {
          immagine: 'img/04.webp',
          titolo: 'Stray',
          testo: 'descrizione',
        }, {
          immagine: 'img/05.webp',
          titolo: 'Avengers',
          testo: 'descrizione',
        }
      ],
      currentImg: 0,
      imgAttiva: 'active',
    };
  },
  methods: {
    next() {
        this.currentImg++;
        if (this.currentImg > this.immaginiThumb.length - 1)
        this.currentImg = 0;
    },

    prev() {
        this.currentImg--;
        if (this.currentImg < 0)
        this.currentImg = this.immaginiThumb.length - 1;

    },

    selezionaImg(index) {
        this.currentImg = index;
    }
    
  }
}).mount('#app');
