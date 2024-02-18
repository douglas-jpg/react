const Photo = ({ data, setOpenPhoto }) => {
    return (
        <div onClick={() => setOpenPhoto(data)}>
            <img src={data.urls.small} alt={data.alt_description} />
        </div>
    );
};

export default Photo;
