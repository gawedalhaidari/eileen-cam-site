
(function(){
  const FONT_KEY = "eileenFont";
  const fonts = [
    "Cairo","Tajawal","IBM Plex Sans Arabic","Noto Kufi Arabic","Almarai","Changa","El Messiri","Amiri","Mada","Markazi Text"
  ];
  const select = document.getElementById("fontSelect");
  if(select){
    fonts.forEach(n=>{
      const o=document.createElement("option"); o.value=n; o.textContent=n; select.appendChild(o);
    });
    const saved = localStorage.getItem(FONT_KEY) || "Cairo";
    document.documentElement.style.setProperty("--font", `"${saved}"`);
    select.value = saved;
    document.getElementById("btnApplyFont").addEventListener("click", ()=>{
      const f = select.value;
      document.documentElement.style.setProperty("--font", `"${f}"`);
    });
    document.getElementById("btnSaveFont").addEventListener("click", ()=>{
      localStorage.setItem(FONT_KEY, select.value);
      alert("تم تثبيت الخط الافتراضي: " + select.value);
    });
  }
  // Force RTL
  document.documentElement.dir = "rtl";
})();
