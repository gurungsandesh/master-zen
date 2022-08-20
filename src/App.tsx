import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cursor from './page/cursor';
import HomePage from './page/homePage';

interface cursorPositionProps {
  clientX: number
  clientY: number
}

function App() {

  const [cursorPosition, setCursorPosition] = useState<cursorPositionProps>({
    clientX: -100,
    clientY: -100
  })

  //todo work on hover
  // const onHoverLink = (elem: any) => {

  // console.log("its is li", elem);
  // elem.target.classList.add("addBorder")
  // if (!elem && elem.tagName === "LI") {
  // }

  // }

  const listenMouseMovement = () => {
    window.addEventListener("mousemove", (e: MouseEvent) => {
      // onHoverLink(e.target)
      setCursorPosition({
        clientX: e.clientX,
        clientY: e.clientY
      })

    })
  }

  useEffect(() => {
    document.body.style.cursor = "none";
    listenMouseMovement();
  }, [])


  return (
    <div className="App">
      <Cursor clientX={cursorPosition.clientX} clientY={cursorPosition.clientY} />
      <Routes>
        {/* <Route path='/' element={<Loader />}></Route> */}
        <Route path='/home' element={<HomePage />}></Route>
        {/* <Route path='/cursor' element={}></Route > */}
      </Routes>

    </div>
  );
}

export default App;
