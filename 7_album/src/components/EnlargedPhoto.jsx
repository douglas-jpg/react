import { PhotoBackdrop } from '../styles';

const EnlargedPhoto = ({ photo, setOpenPhoto }) => {
    return (
        <PhotoBackdrop onClick={() => setOpenPhoto(null)}>
            <div>
                <img src={photo.url.regular} alt={photo.alt_description} />
            </div>
        </PhotoBackdrop>
    );
};

export default EnlargedPhoto;
