$(document).ready(function () { const isMp = window.location.pathname === "/" || window.location.pathname === "/index.html"; if (isMp) { var vds = document.getElementById('vds'); if (vds) { vds.src = "https://vod.plaync.com/LineageW/02_main_f.mp4"; document.getElementById('vd').load(); }  } });