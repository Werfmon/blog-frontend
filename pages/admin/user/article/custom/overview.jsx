import React, {useEffect} from 'react'
import AdminNavbar from '../../../../../Components/Admin/AdminNavbar'
import { getToMainPage } from '../../../../../utils/getToMainPage'
import { isLogged } from '../../../../../utils/isLogged'

export default function overview() {
  useEffect(() => {
    if(!isLogged()) {
      getToMainPage()
    }
  }, [])
  return (
    <>
      <AdminNavbar />
    </>
  )
}
