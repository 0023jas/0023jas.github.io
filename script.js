// Word Typewriter Effect
var words = ['Data Scientist',  
             'ML Engineer', 
             'Data Engineer',
             'Python Developer'
            ],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 50,
    speed = 100;

var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

// Cursor Flicker Effect
var cursor = true;
var flicker_speed = 250;
setInterval(() => {
    if(cursor) {
    document.getElementById('cursor').style.opacity = 0;
    cursor = false;
    }else {
    document.getElementById('cursor').style.opacity = 1;
    cursor = true;
    }
}, flicker_speed);

// CONFETTI!
const confetti_func = () => {

	setTimeout(function() {
		confetti.start()
	}); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
	setTimeout(function() {
		confetti.stop()
	}, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    setTimeout(function() {
        url = '/resume.pdf'
        const a = document.createElement('a')
        a.href = url
        a.download = url.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }, 2500);

};

