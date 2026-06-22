export const downloadPdf = async () => {
  const element = document.getElementById("resumeToDownload");

  if (!element) {
    console.error("Resume element not found");
    return;
  }

  const html = `<!DOCTYPE html><html><head><script src='https://cdn.tailwindcss.com'></script></head><body class='bg-white p-10'>${element.innerHTML}</body></html>`;
  console.log(html);

  try {
    const response = await fetch("https://resumebuilderserver-8nty.onrender.com/generatepdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        html: html,
      }),
    });

    if (!response.ok) {
      throw new Error("PDF generation failed");
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ATS_Resume.pdf";
    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download PDF:", error);
  }
};
