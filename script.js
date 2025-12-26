const toast = document.getElementById("toast");
const copyBtn = document.getElementById("copyLink");
const year = document.getElementById("year");
const lastUpdated = document.getElementById("lastUpdated");

year.textContent = String(new Date().getFullYear());
lastUpdated.textContent = new Date().toLocaleDateString("tr-TR", { year:"numeric", month:"long", day:"numeric" });

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1600);
}

copyBtn.addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(location.href);
    showToast("Link kopyalandı.");
  } catch {
    showToast("Kopyalanamadı. Adresi manuel kopyalayabilirsin.");
  }
});
