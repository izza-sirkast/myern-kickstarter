import { useState, useEffect } from 'react'
import { API } from './configs/API'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get('/users');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
