function colorChange(char){
  switch(char){
    case 'Red':
    document.getElementById('box').style.backgroundColor = 'orangered';
    document.getElementById('txt').innerHTML = 'Red';
    break;
    case 'Blue':
    document.getElementById('box').style.backgroundColor = 'skyblue';
    document.getElementById('txt').innerHTML = 'Blue';
    break;
    case 'Green':
    document.getElementById('box').style.backgroundColor = 'lightgreen';
    document.getElementById('txt').innerHTML = 'Green';
    break;
    case 'Clear':
    document.getElementById('box').style.backgroundColor = 'initial';
    document.getElementById('txt').innerHTML = 'Color';
    break;
  }
}
