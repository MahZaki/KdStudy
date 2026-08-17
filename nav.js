// KDP Niche Scout — Investor Brief — shared deck navigation
(function(){
  var SLIDES = [
    { file:'01-cover.html',            ch:'Cover',      title:'KDP Niche Scout' },
    { file:'02-what-is-kdp.html',      ch:'Primer',     title:'What is KDP?' },
    { file:'03-market-size.html',      ch:'Market',     title:'The Market Beneath the Market' },
    { file:'04-old-way.html',          ch:'Problem',    title:'How Authors Work Today' },
    { file:'05-solution.html',         ch:'Solution',   title:'Introducing KDP Niche Scout' },
    { file:'06-pipeline.html',         ch:'Product',    title:'One Pipeline, Start to Finish' },
    { file:'07-discover.html',         ch:'Product',    title:'Discover — Find the Niche' },
    { file:'08-validate.html',         ch:'Product',    title:'Validate — Trust the Number' },
    { file:'09-create.html',           ch:'Product',    title:'Create — The Book Writes Itself' },
    { file:'10-launch.html',           ch:'Product',    title:'Launch — One Click to Amazon' },
    { file:'11-moat.html',             ch:'Defensibility', title:'Why This Is Hard to Copy' },
    { file:'12-business-model.html',   ch:'Business Model', title:'Three Tiers, One Ledger' },
    { file:'13-unit-economics.html',   ch:'Unit Economics', title:'What One Customer Costs' },
    { file:'14-year1-ramp.html',       ch:'Financials',  title:'The First 12 Months' },
    { file:'15-margins.html',          ch:'Financials',  title:'Where the Margin Comes From' },
    { file:'16-scenarios.html',        ch:'Financials',  title:'Four Sizes of the Same Business' },
    { file:'17-infra-scaling.html',    ch:'Financials',  title:'Infrastructure That Scales in Steps' },
    { file:'18-ask.html',              ch:'The Ask',     title:'What We\u2019re Raising, and Why' },
    { file:'19-risks.html',            ch:'Candor',      title:'What This Model Doesn\u2019t Claim' },
    { file:'20-closing.html',          ch:'Close',        title:'The Next Chapter' }
  ];

  function currentIndex(){
    var f = location.pathname.split('/').pop();
    for(var i=0;i<SLIDES.length;i++){ if(SLIDES[i].file===f) return i; }
    return 0;
  }

  function build(){
    var idx = currentIndex();
    var cur = SLIDES[idx];

    // topbar
    var topbar = document.createElement('div');
    topbar.className = 'topbar';
    topbar.innerHTML =
      '<div class="tb-brand"><span class="dot"></span> KDP NICHE SCOUT &nbsp;\u2014&nbsp; INVESTOR BRIEF</div>' +
      '<div class="tb-title">' + cur.ch + ' &middot; ' + cur.title + '</div>' +
      '<div>' + String(idx+1).padStart(2,'0') + ' / ' + String(SLIDES.length).padStart(2,'0') + '</div>';
    document.body.insertBefore(topbar, document.body.firstChild);

    // spine
    var spine = document.createElement('div');
    spine.className = 'spine';
    var ticks = SLIDES.map(function(s,i){
      return '<a class="tick'+(i===idx?' active':'')+'" href="'+s.file+'" title="'+(i+1)+'. '+s.title+'"><span class="ribbon"></span><i></i></a>';
    }).join('');
    spine.innerHTML =
      '<div class="spine-label">KDP&middot;NICHE&middot;SCOUT</div>' +
      '<div class="ticks">' + ticks + '</div>' +
      '<div class="spine-foot">' + String(idx+1).padStart(2,'0') + '/' + SLIDES.length + '</div>';
    document.body.insertBefore(spine, document.body.firstChild);

    // prev/next
    var prev = idx>0 ? SLIDES[idx-1].file : null;
    var next = idx<SLIDES.length-1 ? SLIDES[idx+1].file : null;
    var deckNav = document.createElement('div');
    deckNav.className = 'deck-nav';
    deckNav.innerHTML =
      '<a href="'+(prev||'#')+'" class="'+(prev?'':'disabled')+'" aria-label="Previous">\u2190</a>' +
      '<span class="count">'+String(idx+1).padStart(2,'0')+' / '+SLIDES.length+'</span>' +
      '<a href="'+(next||'#')+'" class="'+(next?'':'disabled')+'" aria-label="Next">\u2192</a>';
    document.body.appendChild(deckNav);

    document.addEventListener('keydown', function(e){
      if(e.key==='ArrowRight' && next) location.href = next;
      if(e.key==='ArrowLeft' && prev) location.href = prev;
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', build);
  } else { build(); }
})();
