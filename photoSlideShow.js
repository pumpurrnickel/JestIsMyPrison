export const photoSlideShow = {
    photoList:[
        'Photo 1',
        'Photo 2',
        'Photo 3',
        'Photo 4',
    ],
    currentPhotoIndex: 0,

    nextPhoto: function (){
        if (this.currentPhotoIndex < this.photoList.length - 1){
            this.currentPhotoIndex++;
        } else {
            console.log('End of slideshow');
        }
    },

    prevPhoto: function (){
        if (this.currentPhotoIndex > 0){
            this.currentPhotoIndex--;
        } else {
            console.log('Beginning of slideshow');
        }
    },

    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
    },

    photoTwo: function(callback, index){
        if (index == 'Photo 2') {
            callback(index);
        }
    }
}

console.log(photoSlideShow.currentPhotoIndex);
photoSlideShow.nextPhoto();

// module.exports = restMethods;
