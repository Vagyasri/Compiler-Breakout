import './style.css';

const string = 'start print gymhkxq print mkgdszlif print esbtum print rtzrp print qk print isjo print rj print rosyk print oveu print ck print eq print zabigxmnp print fmyrojo print odc print zzuealzc print uu print ippmnc print avrdalsmd print a print lluitcftc print iyc print g print jlvc print qerqe print fhilz print dbdpg print hvphuz print asqeeh print dhtp print xvppfxnk print bi print ajijeptgz print sysmp print qu print buj print alhkauvzc print jue print ogp print zhpykl print qcotrb print jdb print arvfonza print vitxngj print jlfrox print ab print jruantk print nsayjc print nktnp end';

const words = string.split(' ');
const newWords = words.filter((word) => (word !== 'print') && (word !== 'start') && (word !== 'end') && (word !== ' '));
const newString = newWords.join(' ');
const noSpace = newString.replace(/\s/g, '');

console.log(noSpace);