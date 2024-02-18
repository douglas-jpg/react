/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useState, useEffect } from 'react';

import EnlargedPhoto from './components/EnlargedPhoto';
import PhotoList from './components/PhotoList';
import SearchBar from './components/SearchBar';

import { Container } from './styles';

function App() {
    const [querry, setQuerry] = useState('');
    const [category, setCategory] = useState('');
    const [photos, setPhotos] = useState([]);
    const [openPhoto, setOpenPhoto] = useState(null);
    const [activateSearch, setActivateSearch] = useState(false);

    const fetchData = async ({ querry, category }) => {
        const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

        if (querry || category) {
            let searchQuerry = querry;

            if (querry && category) {
                searchQuerry = `${querry} ${category}`;
            } else if (category) {
                searchQuerry = category;
            }

            const response = await axios.get(
                'https://api.unsplash.com/search/photos',
                {
                    params: {
                        client_id: apiKey,
                        querry: searchQuerry,
                    },
                }
            );

            setPhotos(response.data.results);
            return;
        }

        const response = await axios.get(
            'https://api.unsplash.com/photos/random',
            {
                params: {
                    client_id: apiKey,
                    count: 20,
                },
            }
        );
        setPhotos(response.data);

        console.log(response);
    };

    useEffect(() => {
        fetchData(querry, category);
    }, []);

    useEffect(() => {
        if (activateSearch) {
            fetchData({ querry, category });
            setActivateSearch(false);
        }
    }, [activateSearch]);

    return (
        <Container>
            <SearchBar
                setQuerry={setQuerry}
                setCategory={setCategory}
                setActivateSearch={setActivateSearch}
            />
            <PhotoList photos={photos} setOpenPhoto={setOpenPhoto} />
            {openPhoto && (
                <EnlargedPhoto photo={openPhoto} setOpenPhoto={setOpenPhoto} />
            )}
        </Container>
    );
}

export default App;
