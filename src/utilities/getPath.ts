import path from 'path';

const getImagePath = (imagename: string): string => {
    return path.join(__dirname, '../../', 'media', 'images', imagename);
};

const getThumbnailPath = (
    imagename: string,
    imagepath: string,
    width: unknown,
    height: unknown
): string => {
    const thumbnailPath = path.join(
        __dirname,
        '../../',
        'media',
        'thumbnails',
        '/'
    );
    const output = `${thumbnailPath}${
        imagename.split('.')[0]
    }_${width}_${height}.jpg`;
    return output;
};

export { getImagePath, getThumbnailPath };
