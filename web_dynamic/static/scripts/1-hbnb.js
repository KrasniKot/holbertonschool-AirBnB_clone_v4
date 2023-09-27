$(() => {
  const chckd = {};

  $('input').change(() => {
    for (const i of $('input')) {
      if (i.checked) chckd[i.dataset.name] = i.dataset.id;
      else delete chckd[i.dataset.name];
    }
    $('.amenities h4').text(Object.keys(chckd).join(', '));
  });
});
