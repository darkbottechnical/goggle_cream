document.querySelectorAll('*').forEach(el => {
    el.style.animation = 'spin 2s linear infinite';
});
document.styleSheets[0].insertRule(`
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`, 0);
