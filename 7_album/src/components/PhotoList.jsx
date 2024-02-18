import { Album } from '../styles';
import Photo from './Photo';

const PhotoList = ({ photos, setOpenPhoto }) => {
    return (
        <Album>
            {photos.map((photo) => (
                <Photo key={photo.id} data={photo} setOpenPhoto={setOpenPhoto} />
            ))}
        </Album>
    );
};

export default PhotoList;
