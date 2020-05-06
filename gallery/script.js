let loadPhoto = (photonumber) => {
  $('#photo').attr('src', imagesData[photonumber].photo);
  $('#photo-title').text(imagesData[photonumber].title);
  $('#photo-description').text(imagesData[photonumber].description);
  toggleThumb(photonumber);
}

let toggleThumb = (thumbnumber) => {
  $('#'+thumbnumber+' img.thumbnail').toggleClass('selected');
  $('#'+thumbnumber+'.tw').toggleClass('arrow');
}

imagesData = [
  {
    photo: 'https://cdn.havecamerawilltravel.com/photographer/files/2019/05/ricoh-gr-iii-sample-image-30-678x452.jpg',
    title: 'Sample 1',
    description: 'Suavitate laboramus mel at, sed timeam ceteros legendos id, ut pri justo menandri.'
  },
  {
    photo: 'https://cdn.havecamerawilltravel.com/photographer/files/2019/05/ricoh-gr-iii-sample-image-07-678x452.jpg',
    title: 'Sample 2',
    description: 'Vel solum lobortis ut, ne eius epicurei duo.'
  },
   {
    photo: 'https://cdn.havecamerawilltravel.com/photographer/files/2019/05/ricoh-gr-iii-sample-image-36-678x452.jpg',
    title: 'Sample 3',
    description: 'In has amet scripta scaevola, ad est fabulas temporibus, duo dolore signiferumque in.'
  },
   {
    photo: 'https://cdn.havecamerawilltravel.com/photographer/files/2019/05/ricoh-gr-iii-sample-image-49-678x452.jpg',
    title: 'Sample 4',
    description: 'Eu nostrud impedit cum, dolores vivendum gubergren mel cu.'
  },
   {
    photo: 'https://cdn.havecamerawilltravel.com/photographer/files/2019/05/ricoh-gr-iii-sample-image-93-678x452.jpg',
    title: 'Sample 5',
    description: 'Lorem ipsum dolor sit amet, ne est omnesque eleifend, pro ex saepe principes.'
  },
   {
    photo: 'https://cdn.havecamerawilltravel.com/photographer/files/2019/05/ricoh-gr-iii-sample-image-97-678x452.jpg',
    title: 'Sample 6',
    description: 'Eu nostrud impedit cum, dolores vivendum gubergren mel cu.'
  },
   {
    photo: 'https://cdn.havecamerawilltravel.com/photographer/files/2019/05/03-1-678x452.jpg',
    title: 'Sample 7',
    description: 'Et dicta tincidunt his. Porro voluptaria cu sit, vel id habeo virtute legendos. '
  },
   {
    photo: 'https://cdn.havecamerawilltravel.com/photographer/files/2019/05/ricoh-gr-iii-sample-image-77-678x452.jpg',
    title: 'Sample 8',
    description: 'Eos dolore offendit ut, tation apeirian at sed, vix minim omnes ridens te.'
  },
   {
    photo: 'https://cdn.havecamerawilltravel.com/photographer/files/2019/05/ricoh-gr-iii-sample-image-04-678x452.jpg',
    title: 'Sample 9',
    description: 'In aliquip postulant sed, an pri elitr mediocrem appellantur, ea volumus perpetua has.'
  }
]

// betöltés
thumbID = 0;
imagesData.forEach((thumb) => {
  $('#thumbnail-container').append('<div class="tw" id="'+thumbID+'"><img class="thumbnail" src="'+thumb.photo+'" id="'+thumbID+'"></img><div class="titleover">'+thumb.title+'</div>');
  thumbID++;
});
currentPhoto = 0;
loadPhoto(currentPhoto);

// képváltás bélyegképpel
$('.thumbnail').click((event) => {
  let newPhoto = $(event.target).attr('id');
  if (newPhoto !== currentPhoto) {
    toggleThumb(currentPhoto);
    currentPhoto = newPhoto;
    loadPhoto(currentPhoto);
  }
  //console.log($(event.target).attr('id'));
})

// képváltás jobbra
$('#rightnav').click(() => {
  toggleThumb(currentPhoto);
  if (currentPhoto < imagesData.length-1) {
    currentPhoto++;
  } else {
    currentPhoto=0;
  }
  loadPhoto(currentPhoto);
})

// képváltás balra
$('#leftnav').click(() => {
  toggleThumb(currentPhoto);
  if (currentPhoto > 0) {
    currentPhoto--;
  } else {
    currentPhoto = imagesData.length-1;
  }
  loadPhoto(currentPhoto);
})