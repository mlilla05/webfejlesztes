const felirat = document.getElementById('fel');
const szoveg = 'Egészségkuckó';
function betu_kiiras(betu_index)
{
  if (betu_index < szoveg.length)
  {
    felirat.textContent = felirat.textContent + szoveg.charAt(betu_index);
  }
  setTimeout(function(){betu_kiiras(betu_index + 1);}, 100);
}
betu_kiiras(0);