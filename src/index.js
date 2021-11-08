import './style.css';

document.getElementById('inputfile')
  .addEventListener('change', (e) => {
    const fr = new FileReader();
    fr.onload = () => {
      const words = fr.result
        .replace(/[\r\n\d]+/g, ' ')
        .split(' ');
      const fls = words.indexOf('false');
      const els = words.indexOf('else');
      const newArr = words.slice(fls - 1, els + 1);
      words.splice(fls - 1, newArr.length);
      const newWords = words.filter((word) => (word !== 'print') && (word !== 'start') && (word !== 'end'));
      const newString = newWords.join(' ');
      const noSpace = newString.replace(/\s/g, '');
      document.getElementById('output')
        .textContent = noSpace;
    };

    fr.readAsText(e.target.files[0]);
  });