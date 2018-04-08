const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let filename = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

//Add Filter & Effects
document.addEventListener('click', e => {
   if(e.target.classList.contains('filter-btn')){
       if(e.target.classList.contains('brightness-add')){
           Caman('#canvas', img, function () {
               this.brightness(5).render();
           })
       }else if(e.target.classList.contains('brightness-remove')){
           Caman('#canvas', img, function () {
               this.brightness(-5).render();
           })
       }else if(e.target.classList.contains('contrast-add')){
           Caman('#canvas', img, function () {
               this.contrast(5).render();
           })
       }else if(e.target.classList.contains('contrast-remove')){
           Caman('#canvas', img, function () {
               this.contrast(-5).render();
           })
       }else if(e.target.classList.contains('saturation-add')){
           Caman('#canvas', img, function () {
               this.saturation(5).render();
           })
       }else if(e.target.classList.contains('saturation-remove')){
           Caman('#canvas', img, function () {
               this.saturation(-5).render();
           })
       }else if(e.target.classList.contains('vibrance-add')){
           Caman('#canvas', img, function () {
               this.vibrance(5).render();
           })
       }else if(e.target.classList.contains('vibrance-remove')){
           Caman('#canvas', img, function () {
               this.vibrance(-5).render();
           })
       }else if(e.target.classList.contains('vintage-add')){
           Caman('#canvas', img, function () {
               this.vintage().render();
           })
       }else if(e.target.classList.contains('lomo-add')){
           Caman('#canvas', img, function () {
               this.lomo().render();
           })
       }else if(e.target.classList.contains('clarity-add')){
           Caman('#canvas', img, function () {
               this.clarity().render();
           })
       }else if(e.target.classList.contains('sincity-add')){
           Caman('#canvas', img, function () {
               this.sinCity().render();
           })
       }else if(e.target.classList.contains('crossprocess-add')){
           Caman('#canvas', img, function () {
               this.crossProcess().render();
           })
       }else if(e.target.classList.contains('pinhole-add')){
           Caman('#canvas', img, function () {
               this.pinhole().render();
           })
       }else if(e.target.classList.contains('nostalgia-add')){
           Caman('#canvas', img, function () {
               this.nostalgia().render();
           })
       }else if(e.target.classList.contains('hermajesty-add')){
           Caman('#canvas', img, function () {
               this.herMajesty().render();
           })
       }
   }
});

//Revert Filter
revertBtn.addEventListener('click', e => {
   Caman('#canvas', img, function () {
       this.revert();
   })
});


//Upload File
uploadFile.addEventListener('change', (e) => {

    //Get File
    const file = document.getElementById('upload-file').files[0];

    //Init FileReader
    const reader = new FileReader();

    if(file) {
        //Set File name
        filename = file.name;

        //Read data as URL
        reader.readAsDataURL(file);
    }

        //Add image to canvas
        reader.addEventListener('load', () => {
            //Create img
            img = new Image();
            // Set src
            img.src = reader.result;

            //on image load, add to canvas
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
                canvas.removeAttribute('data-caman-id');
            }
        }, false)

});

//Download Event
downloadBtn.addEventListener('click', e => {
   //Get file ext
   const fileExtention = filename.slice(-4);

   //Init new filename
    let newFileName;

    //check image type
    if(fileExtention === '.jpg' || fileExtention === '.png'){
        newFileName = filename.substring(0, filename.length - 4) + '-edited.jpg';
    }

    //Call Download
    download(canvas, newFileName);
});

//Download function
function download(canvas, filename) {
    //Initialise event
    let e;

    //Create Link
    const link = document.createElement('a');

    //Set props
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.8);

    //new mouse event
    e = new MouseEvent('click');

    //dispatch event
    link.dispatchEvent(e);
}