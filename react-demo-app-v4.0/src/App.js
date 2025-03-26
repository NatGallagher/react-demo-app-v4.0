

function App() {

  function useRefDemo1() {
    let msgText = "useRefDemo1";
    console.log(msgText);
  }

  function useStateDemo1() {
    let msgText = "useStateDemo1";
    console.log(msgText);
  }


  return (
    <>
      <h2>React Demo App v4.0</h2>
      <a href="#" onClick={useRefDemo1}>useRefDemo1</a>
      <p></p>
      <a href="#" onClick={useStateDemo1}>useStateDemo1</a>
      <p></p>
      <div>
        [Display Info]
      </div>
    </>
  );
}

export default App;
