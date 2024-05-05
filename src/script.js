const h1 = document.getElementById("h1");
const h1c = document.getElementById("h1c");
h1.onclick = function () {
  h1c.hidden = !h1c.hidden;
};
const dev = document.getElementById("dev");
const devc = document.getElementById("devc");
const devi = document.getElementById("devi");
dev.onclick = function () {
  devc.hidden = !devc.hidden;
};
devi.onclick = function () {
  window.location.href = "https://scipnet.emidblol.dev/";
};
const writer = document.getElementById("writer");
const writerc = document.getElementById("writerc");
writer.onclick = function () {
  writerc.hidden = !writerc.hidden;
};
const pilot = document.getElementById("pilot");
const pilotc = document.getElementById("pilotc");
pilot.onclick = function () {
  pilotc.hidden = !pilotc.hidden;
};
