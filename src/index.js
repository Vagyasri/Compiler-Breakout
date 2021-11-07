import './style.css';

document.getElementById('inputfile')
  .addEventListener('change', (e) => {
    const fr = new FileReader();
    fr.onload = () => {
      const words = fr.result
        .replace(/[\r\n\d]+/g, ' ')
        .split(' ');
      const newWords = words.filter((word) => (word !== 'print') && (word !== 'start') && (word !== 'end'));
      const newString = newWords.join(' ');
      const noSpace = newString.replace(/\s/g, '');
      document.getElementById('output')
        .textContent = noSpace;
    };

    fr.readAsText(e.target.files[0]);
  });
