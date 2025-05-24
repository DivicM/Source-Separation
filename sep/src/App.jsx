import "./App.css";

const App = () => {
  const datum= new Date();
  const a=10;
  const b=20;

  return(
    <div>
      <p>Dobar dan, danas je {datum.toString()}</p>
      <p>
        {a} plus {b} je {a+b}
      </p>
    </div>
  )
};

export default App;
