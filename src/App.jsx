import qrImage from './assets/images/image-qr-code.png';
import Footer from './Footer';

function App() {

  return (
    <>
      <main className="container">
        <img src={qrImage} alt="Qr-code" />
        <h1 className="title">Improve your front-end skills by building projects</h1>
        <p className="subtitle">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </main>
      <Footer />
    </>

  )
}

export default App
