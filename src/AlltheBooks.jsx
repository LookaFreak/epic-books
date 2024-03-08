import React, { useState } from 'react';

// Importa i dati dei libri
import horrorData from '../src/books/horror.json';
import fantasyData from '../src/books/fantasy.json';
import historyData from '../src/books/history.json';
import romanceData from '../src/books/romance.json';
import scifiData from '../src/books/scifi.json';

const AlltheBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favoritesCount, setFavoritesCount] = useState({});

  // Concatena tutti i dati dei libri in un unico array
  const allBooks = [...horrorData, ...fantasyData, ...historyData, ...romanceData, ...scifiData];

  // Funzione per gestire il conteggio dei preferiti per un libro specifico
  const handleFavoriteClick = (bookId) => {
    setFavoritesCount(prevState => ({
      ...prevState,
      [bookId]: (prevState[bookId] || 0) + 1
    }));
  };

  // Funzione per rimuovere dai preferiti per un libro specifico
  const handleRemoveFavoriteClick = (bookId) => {
    setFavoritesCount(prevState => {
      const updatedState = { ...prevState };
      if (updatedState[bookId] > 0) {
        updatedState[bookId] -= 1;
      }
      return updatedState;
    });
  };

  // Funzione per ottenere il conteggio dei preferiti per un libro specifico
  const getFavoritesCountForBook = (bookId) => {
    return favoritesCount[bookId] || 0;
  };

  // Funzione per filtrare i libri in base al termine di ricerca
  const filteredBooks = allBooks.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>All the Books</h2>
      {/* Barra di ricerca */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />
      <div className="row">
        {filteredBooks.map((book, index) => (
          <div key={index} className="col-md-3 mb-3">
            <img src={book.img} alt={book.title} className="img-fluid" />
            <h3>{book.title}</h3>
            <p>{book.price}</p>
            {/* Aggiungi l'icona a forma di cuore per aggiungere/rimuovere dai preferiti */}
            {getFavoritesCountForBook(book.asin) > 0 ? (
              <button onClick={() => handleRemoveFavoriteClick(book.asin)}>
                <svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" fill="black"/></svg>
              </button>
            ) : (
              <button onClick={() => handleFavoriteClick(book.asin)}>
                <svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" fill="red"/></svg>
              </button>
            )}
            {/* Visualizza il conteggio dei preferiti per il libro specifico */}
            <div>
              <span>Favorites: {getFavoritesCountForBook(book.asin)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlltheBooks;


