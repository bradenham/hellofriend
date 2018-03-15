//this is a javascript doc

function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

//document.body.addEventListener("click", toggleFullScreen);


const string = ['Hello^2000, friend.', 'Can we talk?', 'Will you be honest?', 'Do you promise?', 'Do you like flowers?', 'Have you been outside today?', 'Are you in a relationship?', 'Is red your favorite color?', 'Is the key in the room?', 'Do you scream when startled?', 'Do you live alone?', 'Do you have a pet?', 'Have you ever cried during sex?', 'Is it cold there?', 'Would anyone hear you if you screamed?', 'Are you being honest?', 'Are you sure?', 'Do you enjoy Evanston?', 'Have you been there long?', 'Do you believe in ghosts?', "Do you think I'm a ghost?", 'Does that scare you?', 'Are you being honest?', 'Would you lie to me?', 'Do you want to know how you will die?', 'Fright'];
let index = 0;

var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        strings: [string[0]],
        stringsElement: null,
        typeSpeed: 250,
        startDelay: 5000,
        loop: false,

         onStringTyped: (arrayPos, self) => {
            //console.log('it paused');
            stopper();
            index = arrayPos + 1;
        },
      });

document.getElementById('scary').play();
document.getElementById('scary').volume = 0.1;
document.addEventListener('click', start_up)

function stopper() {
    //console.log(index);
    typed.stop();

}



function start_up(){

    //console.log('refesh');
    typed.destroy();
    document.getElementById('buttons').style.transition = "opacity 0s";
    document.getElementById('buttons').style.opacity = '0';
    document.removeEventListener('click', start_up);

    typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        strings: [string[index]],
        stringsElement: null,
        typeSpeed: 250,
        startDelay: 1000,
        loop: false,

         onStringTyped: (arrayPos, self) => {

            
            document.getElementById('buttons').style.transition = "opacity 1s";
            if (index > string.length - 2) {
            document.getElementById('buttons').style.display = 'none';
            } else {
                document.getElementById('buttons').style.display = 'flex';
                document.getElementById('buttons').style.opacity = '1';
            }
            index = index + 1;
            stopper();
        },
      });
    typed.start();
};

