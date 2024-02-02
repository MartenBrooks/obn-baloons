import { createContext, useContext, useEffect, useReducer } from 'react';
const BASE_URL = 'http://localhost:8000';

const ItemsContext = createContext();

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'items/loaded':
      return { ...state, items: action.payload, isLoading: false };
    default:
      throw new Error('Unexpected action');
  }
}

function ItemsProvider({ children }) {
  const [{ items, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(
    function () {
      async function fetchItems() {
        try {
          dispatch({ type: 'loading' });
          const res = await fetch(`${BASE_URL}/items`);
          const data = await res.json();
          console.log(data);
          dispatch({ type: 'items/loaded', payload: data });
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchItems();
    },
    [dispatch]
  );

  return (
    <ItemsContext.Provider value={{ items, isLoading }}>
      {children}
    </ItemsContext.Provider>
  );
}
export default ItemsProvider;

export function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined)
    throw new Error('Items contexts was used outside of items provider');
  return context;
}
