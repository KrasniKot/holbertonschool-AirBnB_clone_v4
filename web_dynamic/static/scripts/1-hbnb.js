$(() => {
  const chckd = {}

  $('input').change(() => {
    if (this.checked) { chckd[this.dataset.id] = this.dataset.name; }
    else { delete chkd[this.dataset.id]; }

    $('.amenities h4').text(chckd); // this is not expected to work properly but to be checked and fixed later
  });
});
