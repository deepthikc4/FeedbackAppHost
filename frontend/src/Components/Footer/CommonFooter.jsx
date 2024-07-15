import React from 'react'

const CommonFooter = () => {
  return (
    <div>
<div className="container" style={{marginTop:"50px"}}>
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p className="nav justify-content-center border-bottom pb-3 mb-3"> G1, Ground Floor, Thejaswini, Technopark Campus,  Office: +91 471 270 0811 info@ictkerala.org</p>
    <p className="text-center text-muted">© ICT Academy of Kerala. All Rights Reserved.</p>
  </footer>
</div>

    </div>
  )
}

export default CommonFooter