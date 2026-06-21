function runCode() {
    const html = document.getElementById("htmlCode").value;
    const css = document.getElementById("cssCode").value;
    const js = document.getElementById("jsCode").value;

    const result = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>
        try {
          ${js}
        } catch (e) {
          document.body.innerHTML +=
            '<pre style="color:red;padding:10px;">Error: ' + e.message + '</pre>';
        }
      <\/script>
    </body>
    </html>
  `;

    document.getElementById("output").srcdoc = result;
}

function clearAll() {
    document.getElementById("htmlCode").value = "";
    document.getElementById("cssCode").value = "";
    document.getElementById("jsCode").value = "";
    document.getElementById("output").srcdoc = "";
}

// Keyboard shortcut: Ctrl + Enter to run
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        runCode();
    }
});

// Run once on page load
document.addEventListener("DOMContentLoaded", runCode);
