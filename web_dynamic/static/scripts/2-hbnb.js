$(() => {
  const chckd = {};

  $('input').change(() => {
    for (const i of $('input')) {
      if (i.checked) chckd[i.dataset.name] = i.dataset.id;
      else delete chckd[i.dataset.name];
    }
    $('.amenities h4').text(Object.keys(chckd).join(', '));
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: (data, tstatus, xhr) => {
      if (tstatus === 'OK') { $('#api_status').addClass('available'); } else { $('#api_status').removeClass('available'); }
    }
  });
});
