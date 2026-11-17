/* Top bar matching maltysnack.github.io (sidebar.js there): avatar and name
   back to the main site, every project, GitHub icon for this repo.
   Self-contained: brings its own styles and fonts, so it sits on top of a
   page with a different design. Keep the project list in step with the main
   site. Usage: <script src="bar.js" data-repo="name"></script> at the end of body. */
(function () {
  const repo = document.currentScript.dataset.repo;
  const site = 'https://maltysnack.github.io';
  const NAV = [
    { href: 'https://filmclub.watch',                   label: 'Filmclub' },
    { href: site + '/worldcup-model/',                  label: 'World Cup' },
    { href: site + '/Dartabase/',                       label: 'Dartabase' },
    { href: site + '/flox/',                            label: 'Flox' },
    { href: 'https://github.com/maltysnack/fpl-engine', label: 'FPL' },
    { href: site + '/cadence/',                         label: 'Cadence' },
  ];

  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@900&family=Instrument+Sans:wght@400&display=swap';
  document.head.appendChild(font);

  const css = document.createElement('style');
  css.textContent = `
.ms-bar{box-sizing:border-box;display:flex;align-items:center;gap:clamp(.75rem,2vw,1.75rem);height:3.25rem;padding:0 clamp(1rem,3.5vmin,3rem);
  background:#0c0c0c;border-bottom:1px solid #2a2a2a;font:400 14px/1.6 'Instrument Sans',system-ui,sans-serif;position:relative;z-index:1;flex-shrink:0}
.ms-bar a{text-decoration:none}
.ms-word{margin-right:auto;display:flex;align-items:center;gap:.55rem;color:#f2f2f2}
.ms-word img{width:1.6rem;height:1.6rem;border-radius:50%;display:block}
.ms-word span{font:900 19px/1 'Big Shoulders Display','Arial Narrow',sans-serif;text-transform:uppercase;letter-spacing:.01em}
.ms-nav{display:flex;gap:clamp(.6rem,1.6vw,1.5rem)}
.ms-nav a{color:#a8a8a8;padding:2px 0;border-bottom:2px solid transparent;white-space:nowrap;transition:color .2s,border-color .2s}
.ms-nav a:hover{color:#f2f2f2}
.ms-nav a[aria-current]{color:#f2f2f2;border-bottom-color:#ff4a3d}
.ms-gh{display:grid;place-items:center;width:1.9rem;height:1.9rem;border-radius:50%;color:#707070}
.ms-gh:hover{color:#f2f2f2;background:#161616}
.ms-gh svg{width:1.05rem;height:1.05rem}
@media (max-width:620px){.ms-bar{padding:0 1rem}.ms-word span{display:none}.ms-nav{gap:.6rem;min-width:0;flex-shrink:1;overflow-x:auto;scrollbar-width:none;padding-right:1.25rem;
  -webkit-mask-image:linear-gradient(to right,#000 calc(100% - 1.5rem),transparent);mask-image:linear-gradient(to right,#000 calc(100% - 1.5rem),transparent)}
  .ms-nav::-webkit-scrollbar{display:none}.ms-nav a{font-size:12px;flex-shrink:0}}`;
  document.head.appendChild(css);

  const here = location.href;
  const links = NAV.map(function (i) {
    const cur = here.startsWith(i.href) ? ' aria-current="page"' : '';
    return '<a href="' + i.href + '"' + cur + '>' + i.label + '</a>';
  }).join('');

  const bar = document.createElement('header');
  bar.className = 'ms-bar';
  bar.innerHTML = `
    <a class="ms-word" href="${site}/" aria-label="Milo Watkinson, home">
      <img src="https://github.com/maltysnack.png" alt="" /><span>Milo Watkinson</span>
    </a>
    <nav class="ms-nav" aria-label="Projects">${links}</nav>
    <a class="ms-gh" href="https://github.com/maltysnack/${repo}" target="_blank" rel="noopener" aria-label="Source on GitHub">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.912.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
    </a>`;
  document.body.prepend(bar);

  const nav = bar.querySelector('.ms-nav'), cur = nav.querySelector('[aria-current]');
  if (cur && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = cur.offsetLeft - nav.offsetLeft - (nav.clientWidth - cur.offsetWidth) / 2;
})();
