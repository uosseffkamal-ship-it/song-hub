function openModal(platformName, tutorialUrl) {
    document.getElementById("modalPlatformTitle").innerText = "قسم " + platformName;
    document.getElementById("modalTutorialLink").href = tutorialUrl;
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// إغلاق عند الضغط خارج النافذة
window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
};
// فتح النافذة المنبثقة
function openModal(platformName) {
    document.getElementById("modalPlatformTitle").innerText = "قسم " + platformName;
    document.getElementById("myModal").style.display = "flex";
}

// إغلاق النافذة
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// التوجيه إلى صفحة المهام عند الضغط على "لا أنا أعرف كيف اتخطي الروابط"
function goToTasks() {
    window.location.href = "tasks.html";
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
};
function goToTasks() {
    window.location.href = "tasks.html";
}
