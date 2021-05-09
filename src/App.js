import './App.css';


function App() {
  function fun()
  {
    alert("clicked");
    console.log("clicked");
  }
  return (
<>
<button type="submit" onSubmit={fun}>click </button>


</>
   
  );
}

export default App;
