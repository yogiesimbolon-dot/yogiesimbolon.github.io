function doGet() {
  return HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle("Kyupisi | SMART Farming, Start Simple")
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Fungsi untuk menangani input form kontak (Opsional: Hubungkan ke Spreadsheet)
 */
function processForm(formData) {
  // Anda bisa menambahkan logika penyimpanan ke Google Sheets di sini
  return "Pesan Anda telah berhasil dikirim ke tim Kyupisi!";
}
