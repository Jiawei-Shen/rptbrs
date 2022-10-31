  import { writable } from 'svelte/store';
  // import _data from "../json/main.json";

  function createStore() {
    const {subscribe, set, update} = writable({
      data: [],
      repeats: [],
      assay: 'DNA',
      scale: 2,
      // files: _data.files // list of all files
    });

    return {
      subscribe,

      set,

      addDataItems: (newVal) => update(n => {
        n.data = newVal;
        return n;
      }),

      addRepeats: (newVal) => update(n => {
        n.repeats = newVal;
        return n;
      }),

      setAssayDNA: () => update( n => {
        n.assay = 'DNA';
        return n;
      }),

      setAssayRNA: () => update( n => {
        n.assay = 'RNA';
        return n;
      }),

      setScale: (scale) => update( n => {
        n.scale = scale;
        return n;
      })

    }
  }

  export const Cart = createStore();
  Cart.subscribe(value => {
    if(value.data.length > 0){
      localStorage.Cart = JSON.stringify(value)
      console.log(JSON.parse(localStorage.Cart))
    }
  })


