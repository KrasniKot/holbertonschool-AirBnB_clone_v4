$(() => {
  const chckd = {};

  $('input').change(() => {
    for (const i of $('input')) {
      if (i.checked) chckd[i.dataset.name] = i.dataset.id;
      else delete chckd[i.dataset.name];
    }
    $('.amenities h4').text(Object.keys(chckd).join(', '));
  });

  $.get('http://localhost:5001/api/v1/status/', function (data, status) {
    if (data.status === 'OK') { $('#api_status').addClass('available'); } else { $('#api_status').removeClass('available'); }
  });

  function crart (place) {
    const article = `
      <article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">$${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
          <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
          <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
        </div>
        <div class="description">${place.description}</div>
      </article>
    `;

    return article;
  }

  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (data) {
      for (const place of data) { $('.places').append(crart(place)); }
    }
  });

  $('button').click(function () {
    $('article').remove();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:5001/api/v1/places_search/',
      contentType: 'application/json',
      data: JSON.stringify({ amenities: Object.values(chckd) }),
      success: function (data) {
        for (const place of data) { $('.places').append(crart(place)); }
      }
    });
  });
});
