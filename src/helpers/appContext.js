import React from 'react';
const AppContext = React.createContext({
	carrito: [],
	setCarrito: () => {}
});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;
