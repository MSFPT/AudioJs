/* Coded By https://github.com/msfpt */

let audios = document.querySelectorAll('audio[AudioJs]');

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const change_format_time = (time) => {
  var minute = parseInt(time / 60);
  var seconds = parseInt(time - (minute * 60));
  if (seconds > 9) return minute.toString() + ":" + seconds.toString();
  else return minute.toString() + ":0" + seconds.toString();
}

var box_audio_style = document.createElement('style')
box_audio_style.innerHTML = '@charset "utf-8";'
  + "@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.css');"
  + ".AudioJs{background: radial-gradient(#181818,#121212);width: 32rem;height: 4.5rem;border-radius: 2pt;overflow: hidden;display: flex;flex-flow: row wrap;justify-content: center;align-items: center;font-family: -apple-system, sans-serif;box-shadow: 0 0 1px #050519d5;margin: 1rem;text-decoration: none;user-select: none;-webkit-user-drag: none;user-zoom: none;}"
  + ".AudioJs > nav{width: 100%;height: auto;color: #d9d9d9;display: flex;justify-content: center;align-items: center;}"
  + ".AudioJs > nav i , .AudioJs > nav span {margin: .7rem;border-radius: 7px;}"
  + ".AudioJs nav i.icon{padding: 15px;background-color: #00000040;}"
  + ".AudioJs nav i.icon:hover{background-color: #1d1c1c;}"
    + ".AudioJs div.vlms{display: flex;flex-flow: column nowrap;justify-content: center;align-items: center;background-color: #0000004d;width: 4.3rem !important;height: 4.5rem !important;padding: 0 !important;overflow: hidden;transition: all .4s ease-in-out;}"
  + ".AudioJs div.vlms i{margin: auto !important;padding: .5rem .7rem !important}"
  + ".AudioJs div.vlms:active{box-shadow: -3px 0 5px #aa00aab3;}"
  + ".AudioJs div.vlms i:active{background: #aa00aa73;box-shadow: 0 0 1px #aa00aaa1;}"
  + ".AudioJs div.vlms i:hover,.AudioJs div.vlms i:active{box-shadow: 0 0 5px #aa00aab3;}"
  + ".AudioJs > nav input[type=range] {-webkit-appearance: none;background-color: transparent;border-radius: 1.5px;width: 320px !important;height: 25px;width: 100%;margin: auto .26rem;outline: none;border: none;}"
  + ".AudioJs > nav input[type=range]::-webkit-slider-runnable-track{-webkit-appearance: none;background: #3bade3;background: -moz-linear-gradient(45deg, #3bade3 0%, #576fe6 25%, #9844b7 51%, #ff357f 100%);background: -webkit-gradient(left bottom, right top, color-stop(0%, #3bade3), color-stop(25%, #576fe6), color-stop(51%, #9844b7), color-stop(100%, #ff357f));background: -webkit-linear-gradient(45deg, #3bade3 0%, #576fe6 25%, #9844b7 51%, #ff357f 100%);background: -o-linear-gradient(45deg, #3bade3 0%, #576fe6 25%, #9844b7 51%, #ff357f 100%);background: -ms-linear-gradient(45deg, #3bade3 0%, #576fe6 25%, #9844b7 51%, #ff357f 100%);background: linear-gradient(45deg, #3bade3 0%, #576fe6 25%, #9844b7 51%, #ff357f 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3bade3 ', endColorstr='#ff357f ', GradientType=1 );height: 5px;border-radius: 1px;}"
  + ".AudioJs > nav input[type=range]::-webkit-slider-thumb{-webkit-appearance: none;background: #000003fc;border: 2px solid rgb(170, 170, 170);border-radius: 50%;height: 1.2rem;width: 1.17rem;position: relative;bottom: 0;margin-top: -7px;cursor: pointer;}"
  + ".AudioJs > nav input[type=range]:hover::-webkit-slider-thumb {background: #000206fa;}";
document.body.appendChild(box_audio_style);
  
for (let i = 0; i < audios.length; i++) {
    const audio = audios[i];
    let action = random(0, (7 ** 7)) + '' + random(0, (7**7));
    // audio.removeAttribute('controls');
  
    audio.setAttribute('action', action);
    audio.volume = 1;
  
    var box_audio = document.createElement('div');
    box_audio.setAttribute('action', action);
    box_audio.setAttribute('id', 'audio');
    box_audio.classList.add('AudioJs');

    box_audio.innerHTML = '<!-- https://github.com/msfpt -->'
      + '<nav>'
        + '<i class="fas fa-play icon play"></i>'
        + '<span class="audiotimerY">00:00</span>'
        + '<input type="range" class="timeing" min="0" max="100" value="0" />'
        + '<span class="audiotimeoutX">00:00</span>'
        + '<i class="fa fa-volume-up icon volume" title="100%"></i>'
        + '<div class="vlms" style="display:none;">'
          + '<i class="fa fa-caret-up volume-up"></i>'
          + '<i class="fa fa-caret-down volume-down"></i>'
        + '</div>'
      + '</nav>'
    audio.before(box_audio);  

    audio.currentTime = 0.001
  
    audio.addEventListener('play', (event) => {
        var audio   = event.srcElement
        var action  = audio.getAttribute('action')
        var mus_box = '#audio[action="' + action + '"]'
        document.querySelector(mus_box + ' > nav .play').classList.toggle('fa-pause')
        document.querySelector(mus_box + ' > nav .play').classList.toggle('fa-play')
        audio.play()
    })
  
    audio.addEventListener('pause', (event) => {
        var audio   = event.srcElement
        var action  = audio.getAttribute('action')
        var mus_box = '#audio[action="' + action + '"]'
        document.querySelector(mus_box + ' > nav .play').classList.toggle('fa-play')
        document.querySelector(mus_box + ' > nav .play').classList.toggle('fa-pause')
        audio.pause()
    })
  
    audio.addEventListener('timeupdate', (event) => {
        var audio   = event.srcElement
        var action  = audio.getAttribute('action')
        var mus_box = '#audio[action="' + action + '"]'
        var time    = audio.currentTime;
        var timeout = audio.duration;
        document.querySelector(mus_box + ' .timeing').setAttribute('max', parseInt(timeout))
        document.querySelector(mus_box + ' .audiotimeoutX').innerText = change_format_time(timeout);
        document.querySelector(mus_box + ' > nav .timeing').value = time;
        document.querySelector(mus_box + ' .audiotimerY').innerText = change_format_time(time);
    })

    box_audio.querySelector('nav i.play').addEventListener('click', function (event) {
        var btn = event.srcElement
        var audio = event.srcElement.parentNode.parentNode.nextElementSibling
        if (btn.classList.contains('fa-play')) {
            audio.play()
        } else {
            audio.pause()
        }
    });
      
    box_audio.querySelector('nav .volume').addEventListener('click', function (event) {
        var volume_box = event.srcElement.nextElementSibling
    
        if (volume_box.style.display == 'none' ? true : false) {
            volume_box.style.display = 'flex'
        } else {
            volume_box.style.display = 'none'
        }
    });
      
    box_audio.querySelector('nav .volume-up').addEventListener('click', function (event) {
        var btn = event.srcElement.parentNode.previousElementSibling
        var audio = event.srcElement.parentNode.parentNode.parentNode.nextElementSibling
        var volume = parseInt(audio.volume * 100);
        
        audio.volume += (0.02);

        change_volume(btn, volume);
    });

    box_audio.querySelector('nav .volume-down').addEventListener('click', function (event) {
        var btn = event.srcElement.parentNode.previousElementSibling
        var audio = event.srcElement.parentNode.parentNode.parentNode.nextElementSibling
        var volume = parseInt(audio.volume * 100);

        audio.volume -= (0.02);

        change_volume(btn, volume);
    });
      
    function change_volume(element, volume) {
          
        if (volume > 50) {
            element.classList.add("fa-volume-up")
            element.classList.remove("fa-volume-down")
            element.classList.remove("fa-volume-off")
            element.classList.remove("fa-volume-mute")
        }
        if (volume < 50) {
            element.classList.remove("fa-volume-up")
            element.classList.add("fa-volume-down")
            element.classList.remove("fa-volume-off")
            element.classList.remove("fa-volume-mute")
        }
        if (volume < 20) {
            element.classList.remove("fa-volume-up")
            element.classList.remove("fa-volume-down")
            element.classList.add("fa-volume-off")
            element.classList.remove("fa-volume-mute")
        }
        if (volume < 1) {
            element.classList.remove("fa-volume-up")
            element.classList.remove("fa-volume-down")
            element.classList.remove("fa-volume-off")
            element.classList.add("fa-volume-mute")

        }

        element.setAttribute("title", volume+"%")
    }
      
    box_audio.querySelector('.timeing').addEventListener('pointerup', function (event) {
        var timeing = event.srcElement;
        var audio = event.srcElement.parentNode.parentNode.nextElementSibling;
        audio.currentTime = parseInt(timeing.value);
    });

}