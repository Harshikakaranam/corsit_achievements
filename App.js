import logo from './logo.svg';
import './App.css';
import './styles.js';

function App() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <title>Achivements</title>
  <div className="top-container" style={{ backgroundColor: "#00ABB3" }}>
    <div className="container-fluid">
      <div className="headline">
        <h1 id="A">OUR ACHIVEMENTS</h1>
      </div>
    </div>
  </div>
  <section style={{ backgroundColor: "#EAEAEA" }}>
    <div className="container py-5">
      <div className="main-timeline">
        <div className="timeline left">
          <div className="card">
            <div className="card-body p-4">
              <h3>1</h3>
              <p className="mb-0">
                More than 60 national and 15 international awards.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline right">
          <div className="card">
            <div className="card-body p-4">
              <h3>2</h3>
              <p className="mb-0">Winner of KURUKSHETRA 2012.</p>
            </div>
          </div>
        </div>
        <div className="timeline left">
          <div className="card">
            <div className="card-body p-4">
              <h3>3</h3>
              <p className="mb-0">
                1st Pize at "Space Junk"-an 8 hr hackathon,BMSCE.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline right">
          <div className="card">
            <div className="card-body p-4">
              <h3>4</h3>
              <p className="mb-0">QUARK 2016 3rd prize(LFR) at BITS Goa.</p>
            </div>
          </div>
        </div>
        <div className="timeline left">
          <div className="card">
            <div className="card-body p-4">
              <h3>5</h3>
              <p className="mb-0">
                Participated in more than 70 national events all over the
                country.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline right">
          <div className="card">
            <div className="card-body p-4">
              <h3>6</h3>
              <p className="mb-0">
                KPIT Sparkles 2016 finalists for best project at Pune.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline left">
          <div className="card">
            <div className="card-body p-4">
              <h3>7</h3>
              <p className="mb-0">
                Participated in various national events like SHASTRA 2019.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline right">
          <div className="card">
            <div className="card-body p-4">
              <h3>8</h3>
              <p className="mb-0">
                NRC 2014 semi-finalists and 2015 finalists at IIT BOMBAY.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline left">
          <div className="card">
            <div className="card-body p-4">
              <h3>9</h3>
              <p className="mb-0">
                Participated in Tech Fest at IIT MADRAS,IIT BOMBAY and many
                more.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline right">
          <div className="card">
            <div className="card-body p-4">
              <h3>10</h3>
              <p className="mb-0">
                Two teams secured first place at Zonal Level of IOT Challenge
                organised by IIT-BOMBAY and ranked in top 100 across the
                country.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline left">
          <div className="card">
            <div className="card-body p-4">
              <h3>11</h3>
              <p className="mb-0">
                Poster presented by team on "International Conference on smart
                city" at IIT-MADRAS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="footer">
    <h3 id="copyrgt">©Team CORSIT</h3>
  </div>
</>

  );
}

export default App;
