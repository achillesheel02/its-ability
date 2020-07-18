import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  constructor() { }
  signs = [
    'a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  activateWebcam = false;
  uploadFile = false;

  ngOnInit(): void {
    function fitElementToParent(el) {
      let timeout = null;
      function resize() {
        if (timeout) { clearTimeout(timeout); }
        anime.set(el, {scale: 1});
        const pad = 0;
        const parentEl = el.parentNode;
        const elOffsetWidth = el.offsetWidth - pad;
        const parentOffsetWidth = parentEl.offsetWidth;
        const ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
      }
      resize();
      window.addEventListener('resize', resize);
    }

    const sphereAnimation = (() => {

      const sphereEl = document.querySelector('.sphere-animation');
      const spherePathEls = sphereEl.querySelectorAll('.sphere path');
      const pathLength = spherePathEls.length;
      const hasStarted = false;
      const aimations = [];

      fitElementToParent(sphereEl);

      const breathAnimation = anime({
        begin() {
          for (let i = 0; i < pathLength; i++) {
            aimations.push(anime({
              targets: spherePathEls[i],
              stroke: {value: ['rgba(255,75,75,1)', 'rgba(80,80,80,.35)'], duration: 500},
              translateX: [2, -4],
              translateY: [2, -4],
              easing: 'easeOutQuad',
              autoplay: false
            }));
          }
        },
        update(ins) {
          aimations.forEach((animation, i) => {
            const percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
            animation.seek(animation.duration * percent);
          });
        },
        duration: Infinity,
        autoplay: false
      });

      const introAnimation = anime.timeline({
        autoplay: false
      })
        .add({
          targets: spherePathEls,
          strokeDashoffset: {
            value: [anime.setDashoffset, 0],
            duration: 3900,
            easing: 'easeInOutCirc',
            delay: anime.stagger(190, {direction: 'reverse'})
          },
          duration: 2000,
          delay: anime.stagger(60, {direction: 'reverse'}),
          easing: 'linear'
        }, 0);

      const shadowAnimation = anime({
        targets: '#sphereGradient',
        x1: '25%',
        x2: '25%',
        y1: '0%',
        y2: '75%',
        duration: 30000,
        easing: 'easeOutQuint',
        autoplay: false
      }, 0);

      function init() {
        introAnimation.play();
        breathAnimation.play();
        shadowAnimation.play();
      }

      init();

    })();
  }

  chooseUploadMethod(id) {
    if (id === 1) {
      this.activateWebcam = true;
      this.uploadFile = !this.activateWebcam;
    }
    else if (id ===2) {
      this.uploadFile = true;
      this.activateWebcam = !this.uploadFile;
    }
  }

  onUpload($event: Event) {

  }

  onSubmit(form: NgForm) {

  }
}
