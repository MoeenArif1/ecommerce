import React,  {useContext, useState} from "react";

const AppContext = React.createContext()
export function useAppContext() {
  return useContext(AppContext)
}

export function AppContextProvider ({children}) {
  const [appContext,setAppContext] = useState({
    cartCount: 0,
    newsletter: false,
    newsletterEmail: null,
    searchValue: "",
   
    cart: null,
    cartTotal: 0
  });


  console.log(appContext)
  return (
    <AppContext.Provider value={{appContext, setAppContext}}>
      {children}
    </AppContext.Provider>
  )
}
