const string = '4 start print kxqd print zlifoesb print tzrpnqk print qrjlros print eu print qdza print npmfm print yod print ealz print ippmnc print alsmd print uitc print ycng print mqer print ilzhdbdp print huzxasqee if false print pp print kvbi print ijeptgzrs print pqqufbujp print kauvzcb print aogp print pyklu print trby print ba end else print onzahvi print gjpjlf print yabkjrua print znsayjcen print pfcfpnrb print rsfmde print mphdbfc print fbni print f print h print jpcyja print czmq end print fyeuxhn print rx print aeh print y print klvxnfi print oklsd print ldeys end';

// split a string
const splitString = (string) => {
  const splitString = string.split(' ');
  return splitString;
};
const arr = splitString(string);

console.log(arr);

const fls = arr.indexOf('false');
const els = arr.indexOf('else');

const ifFalse = () => {
  const findIf = arr.indexOf('if');
  if (findIf + 1 === 'false') {
    const newArr = arr.slice(fls - 1, els + 1);
    arr.splice(fls - 1, newArr.length);
  }
};

console.log(arr);
