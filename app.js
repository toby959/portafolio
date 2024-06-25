document.addEventListener('DOMContentLoaded', function () {
  const currentDate = new Date();
  const options = { year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('es-AR', options);

  const currentDateElement = document.getElementById('currentDate');
  if (currentDateElement) {
    currentDateElement.textContent = formattedDate;
  }
});
