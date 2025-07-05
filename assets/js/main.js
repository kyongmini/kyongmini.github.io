document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Save preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // particles.js 초기화 - 고품질 설정을 위한 부분
    const particlesContainer = document.getElementById('particles-js');
    const isHeroPage = document.querySelector('.hero-section');

    if (particlesContainer && isHeroPage) { // particles-js div와 hero-section이 모두 있는 경우에만 초기화
        particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
    } else {
        if (particlesContainer) {
            particlesContainer.style.display = 'none'; // particles-js div가 있지만 hero-section이 없는 경우 숨김
        }
    }

    // 이스터 에그 기능 추가
    let clickCount = 0;
    const easterEggCat = document.querySelector('.easter-egg-cat');
    const requiredClicks = 5; // 고양이가 나타나기 위한 클릭 횟수

    // Dark Mode Toggle의 클릭 이벤트에 이스터 에그 로직 추가
    // (기존 Dark Mode 로직 위에 추가되므로 별도의 리스너 추가는 필요 없음)
    // Dark Mode Toggle의 기존 클릭 이벤트 리스너가 이스터 에그 기능을 포함하도록 함
    const originalDarkModeToggleClickHandler = darkModeToggle.onclick; // 기존 핸들러 저장 (있다면)
    darkModeToggle.onclick = (event) => { // 새로운 핸들러 정의
        if (originalDarkModeToggleClickHandler) {
            originalDarkModeToggleClickHandler(event); // 기존 핸들러 실행
        }
        
        clickCount++;
        console.log('달 아이콘 클릭 횟수:', clickCount); // 디버깅용

        if (clickCount === requiredClicks) {
            easterEggCat.classList.add('show');
            console.log('이스터 에그 고양이 나타남!'); // 디버깅용
            // 한 번 나타나면 더 이상 카운트되지 않도록 리스너 제거 (선택 사항)
            // darkModeToggle.removeEventListener('click', this); // 이 부분은 현재 적용 방식에선 복잡하므로 일단 제외
            // 한 번 나타난 후에는 클릭 카운트를 리셋하거나, 더 이상 이스터 에그가 작동하지 않도록 할 수 있음
            // clickCount = 0; // 필요시 리셋
        }
    };


    // AOS 초기화
    AOS.init({
        duration: 1000, // 애니메이션 지속 시간 (밀리초)
        easing: 'ease-out-quad', // 애니메이션 가속 곡선
        once: true, // 한 번만 애니메이션 실행 (스크롤 올리고 내릴 때마다 반복 방지)
        mirror: false, // 스크롤 시 애니메이션 반복 여부
        anchorPlacement: 'top-bottom', // 요소의 어느 부분이 화면에 들어왔을 때 애니메이션을 시작할지
    });
});