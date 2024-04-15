import {createContext, useState} from 'react';

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});

function FavouritesContextProvider({children}) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    function addFavourite(id) {
        setFavouriteMealIds(prevState => [...prevState, id]);
    }

    function removeFavourite(id) {
        setFavouriteMealIds(prevState => prevState.filter(item => item !== id));
    }
    const contextValue = {
        ids: favouriteMealIds,
        addFavourite,
        removeFavourite
    }

    return <FavouritesContext.Provider value={contextValue}>{children}</FavouritesContext.Provider>
}

export default FavouritesContextProvider;