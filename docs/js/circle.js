document.addEventListener("DOMContentLoaded", function() {

    var canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = 400;
    canvas.height = 400;
    
    document.body.appendChild(canvas);
    var increaseButton = document.createElement('button');
    increaseButton.innerHTML = 'Increase Speed';

    increaseButton.style.position = 'absolute';
    increaseButton.style.bottom = '15%';
    increaseButton.style.left = '15%';
    increaseButton.style.backgroundColor = '#4CAF50';
    increaseButton.style.padding = '10px';
    increaseButton.style.boxShadow = '0px 0px 10px red';

    increaseButton.addEventListener('click', function(e) {
      speedFactor *= 2;
    });

    var hideLines = false;
    var hideLinesButton = document.createElement('button');
    hideLinesButton.innerHTML = 'Hide Lines';
    
    hideLinesButton.style.position = 'absolute';
    hideLinesButton.style.bottom = '20%';
    hideLinesButton.style.left = '25%';
    hideLinesButton.style.backgroundColor = '#4CAF50';
    hideLinesButton.style.padding = '10px';
    hideLinesButton.style.boxShadow = '0px 0px 10px red';

    hideLinesButton.addEventListener('click', function(e) {
      hideLines = !hideLines;
      hideLinesButton.innerHTML = hideLines ? 'Show Lines' : 'Hide Lines';
    });

    document.body.appendChild(hideLinesButton);

    document.body.appendChild(increaseButton);

    var decreaseButton = document.createElement('button');
    decreaseButton.innerHTML = 'Decrease Speed';

    decreaseButton.style.position = 'absolute';
    decreaseButton.style.bottom = '15%';
    decreaseButton.style.left = '30%';
    decreaseButton.style.backgroundColor = '#4CAF50';
    decreaseButton.style.padding = '10px';
    decreaseButton.style.boxShadow = '0px 0px 10px red';

    decreaseButton.addEventListener('click', function(e) {
      speedFactor /= 2;
    });

    document.body.appendChild(decreaseButton);
        

    
    var speedFactor = 1;
    
    var colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    
    colorPicker.style.position = 'absolute';
    colorPicker.style.bottom = '0px';
    colorPicker.style.left = '3%';
    colorPicker.value = '#ffff00';
    
    colorPicker.addEventListener('change', function(e) {
      circles.strokeStyle = circles.fillStyle = e.target.value;
    });
    
    document.body.appendChild(colorPicker);
    
    var d = document.getElementById('canvas');
    var circles= d.getContext('2d');
    
    var width= d.width, width2= width/2;
    
    var num= 1; 
    var angle= Math.PI*2; 
    var ratio= angle/num;
    
    draw();
    
    var bw= 8;
    var time= 0;
    
    document.body.style.background = 'rgb(0,0,0)';
    
    function draw() {
      d.width= width;
      circles.beginPath();
      circles.fillStyle= 'black';
      circles.fillRect(0,0,width,width);
      circles.closePath();
  circles.beginPath();
  circles.arc(width2,width2,width2-bw,0,angle);
  circle(width2,width2,width2);
  
  circles.lineWidth= 3;
  circles.strokeStyle= circles.fillStyle= colorPicker.value;

  circles.stroke();
  var a= 0;
  if (!hideLines) {
    for (var i=0; i< num*2; i++){
        circles.moveTo(width2,width2);
        circles.lineTo(width2+Math.cos(a)*width2, width2+Math.sin(a)*width2);
        a+= ratio/2;
    }
    circles.stroke();
}


  a= 0;
  for (var i=0; i< num; i++){
      circle(width2+Math.cos(a)*Math.sin(time*speedFactor+i*Math.PI/num)*(width2-bw), 
             width2+Math.sin(a)*Math.sin(time*speedFactor+i*Math.PI/num)*(width2-bw), bw);
      a+= ratio/2;
  }

  time+= 0.03;

  requestAnimationFrame(draw);
}

function circle(x,y,r) {
  circles.beginPath();
  circles.arc(x, y, r, 0, angle);
  circles.fill();
}
    
    
    var num = 1;
    var numButton = document.createElement('button');
    numButton.innerHTML = 'Lines+';
    numButton.style.color = 'red';
    numButton.style.position = 'absolute';
    numButton.style.bottom = '0px';
    numButton.style.left = '50%';
    numButton.style.padding = '10px';
    numButton.style.boxShadow = '0px 0px 10px red';
    numButton.onclick = function() {
      num++;
      ratio = angle / num;
    };
    document.body.appendChild(numButton);
    var numButton = document.createElement('button');
    numButton.innerHTML = 'Lines-';
    numButton.style.color = 'red';
    numButton.style.position = 'absolute';
    numButton.style.bottom = '0px';
    numButton.style.left = '66%';
    numButton.style.padding = '10px';
    numButton.style.boxShadow = '0px 0px 10px red';
    numButton.onclick = function() {
      num--;
      ratio = angle / num;
    };
    document.body.appendChild(numButton);
    
    var bw = 8;
    var bwButton = document.createElement('button');
    bwButton.innerHTML = 'size+';
    bwButton.style.color = 'green';
    bwButton.style.position = 'absolute';
    bwButton.style.bottom = '10%';
    bwButton.style.left = '50%';
    bwButton.style.padding = '10px';
    bwButton.style.boxShadow = '0px 0px 10px red';
    bwButton.onclick = function() {
      bw++;
    };
    document.body.appendChild(bwButton);
    var bwButton = document.createElement('button');
    bwButton.innerHTML = 'size-';
    bwButton.style.color = 'green';
    bwButton.style.position = 'absolute';
    bwButton.style.bottom = '10%';
    bwButton.style.left = '66%';
    bwButton.style.padding = '10px';
    bwButton.style.boxShadow = '0px 0px 10px red';
    bwButton.onclick = function() {
      bw--;
    };
    document.body.appendChild(bwButton);
    var daButton = document.createElement('button');
    var github = document.createElement('a');
    github.href = 'https://github.com/altunenes';
    github.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" height="32" width="32">';
    github.style.position = 'fixed';
    github.style.bottom = '0';
    github.style.left = '0';
    github.style.zIndex = '100';
    document.body.appendChild(github);
    var style = document.createElement('style');
    style.innerHTML = 'button { background: black; }';
    document.body.appendChild(style);



    });