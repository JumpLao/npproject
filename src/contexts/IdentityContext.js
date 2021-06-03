import React, { useContext, useState } from 'react'
import { useEffectOnce } from 'react-use'
import { uuid } from 'uuidv4';

const IDKEY = 'npproject_id'
const IdentityContext = React.createContext()
const IdentityContextProvider = ({
  children
}) => {
  const [id, _setid] = useState(localStorage.getItem(IDKEY))
  useEffectOnce(() => {
    if (!id) {
      setID(uuid())
    }
  })
  const setID = (id) => {
    localStorage.setItem(IDKEY, id)
    _setid(id)
  }
  const value = {
    id,
    setID
  }
  return (
    <IdentityContext.Provider value={value}>
      {children}
    </IdentityContext.Provider>
  )
}

const useIdentity = () => {
  const context = useContext(IdentityContext)
  if (!context) {
    throw new Error('Cannot use useIdentity outside IndentityContextProvider')
  }
  return context
}

export default IdentityContextProvider
export {
  useIdentity
}
