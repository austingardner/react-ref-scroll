import { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const ref = useRef();
  const topScrollRef = useRef();
  const scrollRef = useRef();
  const sections = Array(10).fill({});

  useEffect(() => {
    function updateText() {
      ref.current.textContent = ref.current.textContent + " more text ";
    }
    ref.current.addEventListener("click", updateText);
    let oldRef = ref;
    return () => {
      oldRef.current.removeEventListener("click", updateText);
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <span ref={ref}>Some text </span>
      <button
        ref={topScrollRef}
        onClick={() => scrollRef.current.scrollIntoView()}
      >
        Scroll to bottom
      </button>
      {sections.map((section, i) => (
        <div className="section" key={i}>
          section {i}
        </div>
      ))}
      <button
        onClick={() => topScrollRef.current.scrollIntoView()}
        ref={scrollRef}
      >
        Scroll To Top
      </button>
    </div>
  );
}
