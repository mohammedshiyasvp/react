import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-light " data-bs-theme="light">
<Link  to={``} style={{ textDecoration: 'none' }}>
      <div class="container-fluid">
        <a class="navbar-brand ms-5 text-primary " href="#"><i class="fa-solid fa-utensils fa-2x text-dark"></i><b> ThattuKada</b></a>
        </div>
</Link> 
</nav>
    </>
  )
}

export default Header