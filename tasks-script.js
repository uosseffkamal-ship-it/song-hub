let completedCount = 0;
const totalTasks = 3;

function completeTask(element) {
    if (!element.classList.contains("completed")) {
        element.classList.add("completed");
        completedCount++;
        updateProgress();
    }
}

function updateProgress() {
    const percentage = (completedCount / totalTasks) * 100;
    const progressFill = document.getElementById("progressFill");
    if (progressFill) progressFill.style.width = percentage + "%";
    
    const counterText = document.getElementById("counterText");
    if (counterText) counterText.innerText = completedCount + "/" + totalTasks;

    if (completedCount >= totalTasks) {
        const verifyBtn = document.getElementById("verifyBtn");
        if (verifyBtn) {
            verifyBtn.classList.remove("disabled");
            verifyBtn.classList.add("active");
            verifyBtn.removeAttribute("disabled");
        }
    }
}

function checkFinalStep() {
    if (completedCount >= totalTasks) {
        // قراءة رابط التحميل الممرر من الصفحة الأولى
        const urlParams = new URLSearchParams(window.location.search);
        const downloadUrl = urlParams.get('download');

        if (downloadUrl) {
            // التوجيه المباشر لرابط التحميل فوراً
            window.location.href = downloadUrl;
        } else {
            alert("خطأ: لم يتم العثور على رابط التحميل!");
        }
    }
}
