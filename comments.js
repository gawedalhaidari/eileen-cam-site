
// ===== Comments Module =====
// Mode: "local" (default) or "firebase"
const COMMENTS_MODE = "local"; // change to "firebase" and fill firebaseConfig below for global comments
const STORE_KEY = "eileenComments";
// Firebase placeholders
const firebaseConfig = {
  apiKey: "", authDomain: "", projectId: "", databaseURL: "",
};
let fb = null;

function fmtDate(d){ const pad=n=>String(n).padStart(2,'0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function render(list){
  const box = document.getElementById("commentsList");
  box.innerHTML = "";
  list.slice().reverse().forEach(c=>{
    const div = document.createElement("div"); div.className="comment-item";
    const meta = document.createElement("div"); meta.className="comment-meta";
    const stars = "★".repeat(c.stars||0) + "☆".repeat(5-(c.stars||0));
    meta.innerHTML = `<span class="stars">${stars}</span><span>${c.date}</span>`;
    const text = document.createElement("div"); text.textContent = c.text;
    div.appendChild(meta); div.appendChild(text); box.appendChild(div);
  });
}

async function loadComments(){
  if(COMMENTS_MODE==="firebase"){
    if(!fb){ console.warn("Firebase not configured"); return render([]); }
    // Example: read from RTDB path /comments
    const snap = await fb.get(fb.child(fb.ref(fb.getDatabase()), "comments"));
    const val = snap.val() || {};
    const arr = Object.values(val);
    render(arr);
  }else{
    const arr = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
    render(arr);
  }
}
async function saveComment(c){
  if(COMMENTS_MODE==="firebase"){
    if(!fb){ alert("لم يتم تهيئة التخزين بعد"); return; }
    const key = Date.now().toString();
    await fb.set(fb.ref(fb.getDatabase(), "comments/"+key), c);
  }else{
    const arr = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
    arr.push(c);
    localStorage.setItem(STORE_KEY, JSON.stringify(arr));
  }
  loadComments();
}

document.addEventListener("DOMContentLoaded", ()=>{
  // Hook form
  const form = document.getElementById("commentForm");
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const txt = document.getElementById("commentText").value.trim();
    const stars = parseInt(document.getElementById("commentStars").value || "0");
    if(!txt){ return; }
    const c = { text: txt, stars: Math.max(0, Math.min(5, stars)), date: fmtDate(new Date()) };
    document.getElementById("commentText").value="";
    document.getElementById("commentStars").value="";
    saveComment(c);
  });
  loadComments();
});
