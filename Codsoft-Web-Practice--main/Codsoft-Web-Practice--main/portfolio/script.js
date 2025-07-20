function downloadDocument() {
  const fileContent = 'This is the content of the document.';
  const blob = new Blob([fileContent], { type: 'text/plain' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
