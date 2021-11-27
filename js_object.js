"use strict";

function Person(fname, lname, oaddress) {
  this.firstName = fname;
  this.lastName = lname;
  this.officeAddress = oaddress;
}

const prashant = new Person(
  "prashant",
  "chaudhary",
  "vill+post-Charora jahangirabad"
);
console.log(prashant);

const Kartik = new Person(
  "Kartik",
  "Sharma",
  "P.O. Box 283 Kota Rajsthan"
);
console.log(Kartik);

const Robert = new Person(
  "Robert",
  "Grimson",
  "po BOx- 234 Mahrashtra India"
);
console.log(Robert);