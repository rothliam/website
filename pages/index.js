import React, { useEffect } from 'react';

function Index() {
  useEffect(() => {
    const animationElement = document.querySelector('.animation div:first-child');
    const clone = animationElement.cloneNode(true);
    animationElement.parentNode.replaceChild(clone, animationElement);
  }, []); // The empty dependency array ensures this runs once on mount

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:700');

        body {
          font-family:'Roboto';
          background-color: #131417;  
        }
        p {
          text-shadow: 0 0 7px rgba(255,255,255,.3), 0 0 3px rgba(255,255,255,.3);
        }
        .container {
          color: #e5e5e5;
          font-size: 2.26rem;
          text-transform: uppercase;
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .animation {
          height:50px;
          overflow:hidden;
          margin-left: 1rem;
        }

        .animation > div > div {
          padding: 0.25rem 0.75rem;
          height:2.81rem;
          margin-bottom: 2.81rem;
          display:inline-block;
        }

        .animation div:first-child {
          animation: text-animation 8s infinite;
        }

        .first div {
          background-color:#20a7d8;
        }
        .second div {
          background-color:#CD921E;
        }
        .third div {
          background-color:#c10528;
        }

        @keyframes text-animation {
          0% {margin-top: 0;}
          10% {margin-top: 0;}
          20% {margin-top: -5.62rem;}
          30% {margin-top: -5.62rem;}
          40% {margin-top: -11.24rem;}
          60% {margin-top: -11.24rem;}
          70% {margin-top: -5.62rem;}
          80% {margin-top: -5.62rem;}
          90% {margin-top: 0;}
          100% {margin-top: 0;}
        }
      `}</style>
      <main className="container">
        <p>Hallo 👋 Ich bin</p>
        <section className="animation">
          <div className="first"><div>Liam Ilaya Roth</div></div>
          <div className="second"><div>Lernender an der BWD</div></div>
          <div className="third"><div>Applikationsentwickler</div></div>
        </section>
      </main>
    </>
  );
}

export default Index;
