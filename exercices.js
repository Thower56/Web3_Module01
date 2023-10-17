const etudiants = [
    {'note' : 8.5, 'nom' : 'Adam Bernard', 'matricule' : '486123'},
    {'note' : 10.0, 'nom' : 'Charles Demers', 'matricule' : '375911'},
    {'note' : 6.0, 'nom' : 'Eric Fillion', 'matricule' : '025893'},
    {'note' : 5.5, 'nom' : 'Guy Huard', 'matricule' : '507962'},
    {'note' : 6.0, 'nom' : 'Ian Jacob', 'matricule' : '935700'},
    {'note' : 7.0, 'nom' : 'Kim Labrecque', 'matricule' : '135796'},
    {'note' : 10.0, 'nom' : 'Michel Nolet', 'matricule' : '579461'},
    {'note' : 2.5, 'nom' : 'Olivier Paquet', 'matricule' : '356919'},
    {'note' : 0.0, 'nom' : 'Quentin Roberge', 'matricule' : '791222'},
    {'note' : 9.5, 'nom' : 'Sylvie Tanguay', 'matricule' : '777855'},
  ];

function Question1() {
    const resultats = etudiants.map(e => e.nom + ' ' + (e.note*10));
    return resultats;
  }

function Question2() {
    const resultats = etudiants.toSorted((a,b) => parseInt(a.matricule) - parseInt(b.matricule)).map(e => e.nom);
    return resultats;
}

function Question3() {
    const resultats = etudiants.filter(e => e.note < 6).map(e => e.nom);
    return resultats;
}

function Question4() {
    const resultats = etudiants.reduce((t,n) =>  t += n.note, 0) / etudiants.length * 10;
    return resultats;
}

function Question5() {
    const moyenne = etudiants.reduce((t,n) =>  t += n.note, 0) / etudiants.length * 10;
    const sommeCarres = etudiants.reduce((t, n) => t + Math.pow(n.note - moyenne, 2), 0);
    const variance = sommeCarres / etudiants.length;
    const ecartType = Math.sqrt(variance);
    return ecartType;
}

function Question6() {
    const resultats = etudiants.filter(e => e.nom.split(" ",).pop().length <= 6).map(e => e.nom);
    return resultats;
}

function Question7() {
    const resultats = etudiants.map(e => "*** " + e.nom + " ***");
    return resultats
}

function Question8() {
    const nombres = [10, 5, 7, 7, 10, 2, 1, 1, 2, 2, 5, 4];
    const resultats = nombres.filter((valeur, index) => nombres.indexOf(valeur) === index);
    return resultats;
}

function Question9() {
    const nombres = [10, 5, 7, 7, 10, 2, 1, 1, 2, 2, 5, 4];
    const resultats = nombres.sort((a,b) => parseInt(b) - parseInt(a)).splice(0, 2);
    return resultats;
}

function Question10() {
    const tableau1 = [10, 5, 7, 11, 0, 23, 1, 9, 8, 13, 6, 24];
    const tableau2 = [0, 15, 7, 27, 12, 21, 13, 19, 2, 32, 25, 4];
    const cible = 33;

    //return ...
}