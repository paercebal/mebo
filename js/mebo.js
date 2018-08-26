if(! mebo) { var mebo = {};}
mebo.__private__ = {};

mebo.__private__.include = function(url)
{
   var script = document.createElement("script");
   script.src = url;
   document.head.appendChild(script);
}

mebo.__private__.onLoadExecute_callbacks = [];
mebo.__private__.onUnloadExecute_callbacks = [];

mebo.__private__.onLoadExecutor = function()
{
   let i = 0, iMax = mebo.__private__.onLoadExecute_callbacks.length;
   for(; i < iMax; ++i)
   {
      mebo.__private__.onLoadExecute_callbacks[i]();
   }
}

mebo.__private__.onUnloadExecutor = function()
{
   let i = mebo.__private__.onLoadExecute_callbacks.length - 1, iMin = 0;
   for(; i >= iMin; --i)
   {
      mebo.__private__.onUnloadExecute_callbacks[i]();
   }
}

mebo.onLoadExecute = function(callback)
{
   mebo.__private__.onLoadExecute_callbacks.push(callback);
}

mebo.onUnloadExecute = function(callback)
{
   mebo.__private__.onUnloadExecute_callbacks.push(callback);
}

window.addEventListener("load", mebo.__private__.onLoadExecutor, false);
window.addEventListener("unload", mebo.__private__.onUnloadExecutor, false);

mebo.__private__.include("../js/mebo.audio.js");
