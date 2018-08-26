if(! mebo) { var mebo = {};}
mebo.audio = {};
mebo.audio.__private__ = {};

mebo.audio.enrichAudioElement = function()
{
   var aa = document.getElementsByTagName("audio");
   //alert("aa:" + aa.length);
   var a, s, n, e, i, j;
   for (i = 0; i < aa.length; ++i)
   {
      a = aa[i];
      //alert("a:" + a.childNodes.length);
      for (j = 0; j < a.childNodes.length; ++j)
      {
         s = a.childNodes[j];
         //alert("s:" + s.tagName +"\ns:" + (s.tagName + "").toLowerCase());
         if((s.tagName + "").toLowerCase() == "source")
         {
            n = s.getAttribute("src");
            e = document.createElement("div");
            e.setAttribute("class", "cssAudio");
            e.setAttribute("align", "center");
            e.innerHTML = "<div>" + n.replace(/^..\/music/, "") + " <button onclick=\"mebo.audio.stopAllAudio()\">Stop All</button></div>";
            a.parentNode.insertBefore(e, a);
            e.appendChild(a);
         }
      }
   }
}

mebo.audio.stopAllAudio = function()
{
   var aa = document.getElementsByTagName("audio");
   //alert("aa:" + aa.length);
   var a, s, n, e, i, j;
   for (i = 0; i < aa.length; ++i)
   {
      a = aa[i];
      a.pause();
      a.currentTime = 0;
   }
}

mebo.onLoadExecute(mebo.audio.enrichAudioElement);
