import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" ></meta>
        <link rel="stylesheet" href="/css/style.css"/>
      </Head>

      <header className="main-header">
        <div className="page-center">
          <div className="header-wrapper">
          <div className="logo-block">
          
            <a href="" className="logo-wrapper">
              <img src="images/elegant_logo.png" width="108" height="24" alt="elegant_logo"/>
            </a>
            </div>
            <div className="top-menu-block">
              <nav className="navigation-menu">
                  <ul>
                    <li>
                      <a href="##">About</a>
                    </li>
                    <li>
                      <a href="##">Case studies</a>
                    </li>
                    <li>
                      <a href="##">Blog</a>
                    </li>
                    <li className="sub-menu-list">
                    <a href="##">Contact</a>
                    <ul className="sub-menu">
                      <li><a href="##"><img src="images/Mobile.png"/>0161 883 1368</a></li>
                      <li><a href="mailto:hello@elegantdigital.co.uk"> <img src="images/email.png"/>hello@elegantdigital.co.uk</a></li>
                      <li><a href="##">Letâ€™s talk <img src="images/arrow_back_24px.png"/></a></li>
                    </ul>
                    </li>
                    
                  </ul>
                </nav>
            </div>
            
          </div>
        </div>
      </header>

      <footer>
        <div className="main-footer">
        <div className="page-center">
        <div className="footer-top-block">
        <div className="footer-search-block">
            <div className="search">
            <input type="text" className="searchTerm" placeholder="Get in touch"/>
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
          </button>
        </div>
        
        <div className="footer-bottom-block">
        <div className="social-icon-block">
        <ul>
          <li><a href="##"><img src="images/linkedin-icon.png"/></a></li>
          <li><a href="##"><img src="images/twiter-icon.png"/></a></li>
        </ul>
        </div>
        <div className="footer-links-block">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="footer-links-block">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="footer-links-block">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        
        </div>
        </div>
        </div>
        </div>
        </div>
      </footer>

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        html,
        body {
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
