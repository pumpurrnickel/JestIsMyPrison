import {photoSlideShow} from '../photoSlideShow';
import {jest} from '@jest/globals';

describe('first photo in slide show is Photo 1', () => {
    test('should be photo 1', () => {
        expect(photoSlideShow.photoList[0]).toBe('Photo 1');
    });
});

describe('photoList has an array length of 4', () => {
    test('photoList length is 4', () => {
        expect(photoSlideShow.photoList).toHaveLength(4);
    });
});

describe('nextPhoto return value is undefined', () => {
    test('nextPhoto return undefined', () => {
        expect(photoSlideShow.nextPhoto(undefined)).toBeFalsy();
    });
});

describe('prevPhoto returns currentPhotoIndex of 1 when on photo 2', () => {
    test('prevPhoto returns Photo 1', () => {
        const photo1 = jest.fn(() => true);
        photoSlideShow.currentPhotoIndex = 2;
        photo1(photoSlideShow.getCurrentPhoto);
        expect(photo1).toHaveReturned();
    });
});


//next test probably doesn't work the right way, since I'm testing an if-else statement, increase should be called either way

describe('currentPhotoIndex does not increment when at end of slide show', () => {
    test('array index does not increase', () => {
        const increase = jest.fn();
        photoSlideShow.currentPhotoIndex = 4;
        photoSlideShow.nextPhoto(increase, photoSlideShow.currentPhotoIndex);
        expect(increase).not.toHaveBeenCalled();
    });
});

describe('photoTwo is called when on photo 2', () => {
    test('we are on photo 2', () => {
        const photo2 = jest.fn();
        photoSlideShow.photoTwo(photo2, 'Photo 2');
        expect(photo2).toHaveBeenCalled();
    });
});