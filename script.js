const languageSelect = document.getElementById("languageSelect");
const codeInput = document.getElementById("codeInput");
const output = document.getElementById("output");

languageSelect.addEventListener("change", updateSyntaxHighlighting);
codeInput.addEventListener("input", updateSyntaxHighlighting);

function updateSyntaxHighlighting() {
    const selectedLanguage = languageSelect.value;
    const code = codeInput.value;

    output.innerHTML = `<pre><code class="${selectedLanguage}">${escapeHtml(code)}</code></pre>`;
    hljs.highlightAll();
}

function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
