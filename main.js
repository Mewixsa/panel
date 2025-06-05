  document.querySelectorAll('.toggle-box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('red');
        box.classList.toggle('green');
    });
  });

