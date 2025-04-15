document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  const passwordFields = document.querySelectorAll('input[type="password"]');
  const toggleIcons = document.querySelectorAll('.fa-eye');

  toggleIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      const field = passwordFields[index];
      if (field.type === 'password') {
        field.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        field.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  });
});