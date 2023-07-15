import React,  {useContext, useState} from "react";

const LoginContext = React.createContext()
export function useLoginContext() {
  return useContext(LoginContext)
}

export function LoginContextProvider ({children}) {
  const [loginContext,setLoginContext] = useState();


  console.log(loginContext)
  return (
    <LoginContext.Provider value={{loginContext, setLoginContext}}>
      {children}
    </LoginContext.Provider>
  )
}