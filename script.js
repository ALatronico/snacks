// // Definizione dell'array di input
// const array = ['pippo', 'PLUTO', 'Paperino'];

// // Creazione dell'array formattato
// const newArray = array.map(str => 
//   str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
// );

// console.log(formattedArray);

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const persone = [
  { 
    name: 'Antonio',
    surname: 'Latronico',
    age : 21
  },
  { name: 'Giovanni',
    surname: 'Fois',
    age : 18
  },
  { name: 'Simone',
    surname: 'De Ughi',
    age : 20
  },
  { name: 'Angelo',
    surname: 'Rossi',
    age : 16
  },
  { name: 'Giuseppe',
    surname: 'Verdi',
    age : 31
  },
  { name: 'Francesco',
    surname: 'Marzano',
    age : 15
  }
]

const risultati = persone.map(persona => {
  const {name, surname} = persona;
  const puoGuidare = persona.age >= 18 ? 'può guidare' : 'non può guidare';
  const license = `${name} ${surname} ${puoGuidare}`
  return {
    ...persona, 
    license
  }
})

console.log(risultati);
