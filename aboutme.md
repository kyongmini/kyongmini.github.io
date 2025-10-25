---
layout: default
title: Research
permalink: /aboutme/
---

<div class="container">
    <!-- [NEW] Profile photo block -->
    <div class="profile-photo">
        <img src="/assets/images/kkm.jpg" alt="Kyungmin Kwon profile photo">
    </div>

    <h1>My Research Focus</h1>
    <p>
    Thanks for visiting! If you’d like to get in touch, please email
    <a class="prof-link copy-email" href="mailto:kyongmini@khu.ac.kr">kyongmini@khu.ac.kr</a>
    or
    <a class="prof-link copy-email" href="mailto:biphoton02@gmail.com">biphoton02@gmail.com</a>.
    </p>


    <h2>Research</h2>
    <ul>
        <li>Quantum Optics & Quantum Information</li>
        <li>Nonlinear Optics</li>
        <li>Machine Learning & Reinforcement Learning</li>
    </ul>


    <h2>Education</h2>
    <ul>
        <li>
        <strong>B.Sc. in Electronic Engineering & Quantum Information Convergence</strong>
        <span class="date-badge">
            <time datetime="2021-03">Mar 2021</time> – <time datetime="2025-08">Aug 2025</time>
        </span>
        from Kyung Hee Univ. @
        <a class="prof-link" href="http://nopd.khu.ac.kr/" target="_blank" rel="noopener">NOPD Lab (Prof. Kwang Jo Lee)</a>.
        </li>
        <li>[Placeholder for M.Sc., if applicable in the future]</li>
        <li>[Placeholder for Ph.D., if applicable in the future]</li>
    </ul>

    <h2>Internship</h2>
    <ul>
        <li>
        <strong>Research Intern, Center for Quantum Information, KIST</strong>
        <span class="date-badge">
            <time datetime="2024-06">Jun 2024</time> – <time datetime="2024-08">Aug 2024</time>
        </span>
        (<a class="prof-link" href="https://kyongmini.github.io/qutrittomography" target="_blank" rel="noopener">Qutrit tomography</a>)
        </li>

        <!-- 2) POSTECH QOQI · Computational ghost imaging (PPT evidence, prof-link 스타일) -->
        <li>
        <strong>Research Intern, Quantum Optics & Quantum Information (QOQI) Lab, POSTECH</strong>
        <span class="date-badge">
            <time datetime="2024-01">Jan 2024</time>
        </span>
        (<a class="prof-link" href="/assets/docs/postech_cgi.pptx" target="_blank" rel="noopener">Computational ghost imaging</a>)
        </li>

    </ul>
</div>


<style>
        /* 복사 피드백 스타일 (살짝 배경 하이라이트) */
    .copy-email.copied {
    background: rgba(13,110,253,0.08);
    border-bottom-color: rgba(13,110,253,0.6);
    }
    body.dark-mode .copy-email.copied {
    background: rgba(100,255,218,0.12);
    border-bottom-color: rgba(100,255,218,0.75);
    }

    /* 화면에 보이지 않는 접근성용 영역 */
    .visually-hidden {
    position:absolute !important;
    width:1px; height:1px;
    margin:-1px; border:0; padding:0;
    white-space:nowrap; clip-path:inset(50%); clip:rect(0 0 0 0); overflow:hidden;
    }

    .evidence-link{
  display:inline-block;
  margin-left:.5rem;
  padding:.12rem .55rem;
  font-size:.85em;
  border-radius:.4rem;
  border:1px solid #cfe2ff;
  background:#eef6ff;
  text-decoration:none;
  transition:all .16s ease;
}
.evidence-link:hover,
.evidence-link:focus{
  border-color:#9ec5fe;
  background:#e2eeff;
  outline:none;
}
body.dark-mode .evidence-link{
  border-color:#334155;
  background:#0f172a;
}
body.dark-mode .evidence-link:hover,
body.dark-mode .evidence-link:focus{
  border-color:#475569;
  background:#132036;
}

        .date-badge{
    display:inline-block;
    margin-left:.4rem;
    padding:.12rem .45rem;
    font-size:.85em;
    border-radius:.4rem;
    background:#eef6ff;
    border:1px solid #cfe2ff;
    }
    body.dark-mode .date-badge{
    background:#0f172a;
    border-color:#334155;
    }

    /* -------------------------------
       Profile photo (top of page)
    --------------------------------*/
    .profile-photo {
        display: flex;
        justify-content: center;
        margin: 1.5rem 0 1rem;
    }
    .profile-photo img {
        /* 최소 200px, 보통 화면의 22vw, 최대 320px */
        width: clamp(200px, 18vw, 250px);
        height: clamp(200px, 18vw, 250px);
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        border: 3px solid rgba(100, 155, 218, 0.35);
    }

    body.dark-mode .profile-photo img {
        box-shadow: 0 10px 24px rgba(0,0,0,0.45);
        border-color: rgba(100, 255, 218, 0.55);
    }

    /* -----------------------------------
       Emphasized professor site link
    ------------------------------------*/
    .prof-link {
        /* 기본(라이트 모드) 색 */
        color: #0d6efd;               /* 선명한 파랑 */
        font-weight: 600;
        text-decoration: none;
        border-bottom: 2px solid rgba(13,110,253,0.25);
        transition: color 0.18s ease, border-color 0.18s ease, background 0.18s ease;
        padding: 0 .15rem;
        border-radius: .25rem;
    }
    .prof-link:hover,
    .prof-link:focus {
        color: #0b5ed7;
        border-bottom-color: rgba(13,110,253,0.5);
        background: rgba(13,110,253,0.06);
        outline: none;
    }
    body.dark-mode .prof-link {
        color: #64ffda;               /* 다크 모드에 잘 보이는 민트 */
        border-bottom-color: rgba(100,255,218,0.35);
    }
    body.dark-mode .prof-link:hover,
    body.dark-mode .prof-link:focus {
        color: #8affea;
        border-bottom-color: rgba(100,255,218,0.7);
        background: rgba(100,255,218,0.1);
    }

    /* -----------------------------------
       Selection (드래그로 텍스트 선택 시)
       - 전체 페이지 기본 선택색
       - 교수님 링크는 별도 선택색
    ------------------------------------*/
    ::selection {
        background: #ffec99;   /* 은은한 노랑 하이라이트 */
        color: #0a192f;        /* 진한 남색 글자 */
    }
    body.dark-mode ::selection {
        background: #2a9d8f;   /* 다크 모드에서 녹청색 하이라이트 */
        color: #0a0a0a;        /* 거의 검정 */
    }
    /* 링크가 선택될 때는 더 또렷한 대비 */
    .prof-link::selection {
        background: #ffd166;   /* 더 진한 노랑 */
        color: #212529;        /* 가독성 좋은 회색-검정 */
    }
    body.dark-mode .prof-link::selection {
        background: #3ed6c5;   /* 민트톤 하이라이트 */
        color: #0b0f14;
    }

    /* -----------------------------------
       Keep your existing project-grid styles
    ------------------------------------*/
    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }
    .project-item {
        border: 1px solid #ddd;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        background-color: #fff;
    }
    body.dark-mode .project-item {
        background-color: #1a1a1a;
        border-color: #333;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    .project-item h3 {
        color: #0a192f;
        margin-bottom: 0.8rem;
    }
    body.dark-mode .project-item h3 {
        color: #64ffda;
    }
    .project-item p {
        margin-bottom: 1.5rem;
    }
</style>
<script>
  (function(){
    function flash(link){
      const old = link.textContent;
      const status = document.getElementById('copy-status');
      link.classList.add('copied');
      link.textContent = 'Copied!';
      if(status) status.textContent = 'Email address copied to clipboard.';
      setTimeout(()=>{ link.classList.remove('copied'); link.textContent = old; }, 900);
    }

    async function copyText(text, link){
      try{
        await navigator.clipboard.writeText(text.trim());
        flash(link);
      }catch(e){
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        flash(link);
      }
    }

    document.addEventListener('click', (e)=>{
      const link = e.target.closest('a.copy-email');
      if(!link) return;
      // 메일 앱 열리는 기본 동작 막고 복사만 수행
      e.preventDefault();
      copyText(link.textContent, link);
    });
  })();
</script>
