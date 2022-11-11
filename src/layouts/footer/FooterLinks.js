import React from 'react'

function FooterLinks({links}) {
  return (
    <div className='footer-links'>
        {
            links && links.map((link, ind) => <div key={`foor-link-${ind}`}><a href='/'>{link}</a></div>)
        }
    </div>
  )
}

export default FooterLinks