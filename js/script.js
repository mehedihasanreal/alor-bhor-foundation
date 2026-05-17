document.getElementById('year').textContent = new Date().getFullYear();

function handleContactForm(event) {
  event.preventDefault();
  const successModal = new bootstrap.Modal(
    document.getElementById('successModal')
  );
  successModal.show();
  event.target.reset();
  return false;
}

function handleVolunteerForm(event) {
  event.preventDefault();
  const volunteerModal = bootstrap.Modal.getInstance(
    document.getElementById('volunteerModal')
  );
  volunteerModal.hide();

  const successModal = new bootstrap.Modal(
    document.getElementById('successModal')
  );
  successModal.show();
  event.target.reset();
  return false;
}
