function openPictureGallery() {
    var pictureFrame = document.getElementById('galleryFrame');
    var pictureFrameTrigger = document.querySelector('[onclick="openPictureGallery()"]');
    var pictureFrameTriggerClass = 'picture-gallery__trigger--rotated';

    if (getComputedStyle(pictureFrame).display === 'none') {
        pictureFrame.style.display = 'block';
        pictureFrameTrigger.classList.remove(pictureFrameTriggerClass);
    } else {
        pictureFrame.style.display = 'none';
        pictureFrameTrigger.classList.add(pictureFrameTriggerClass);
        //TODO: FIX
        location.reload();
    }
    positionFooter();
}