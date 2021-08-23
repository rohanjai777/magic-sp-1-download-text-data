import logo from './logo.svg';
import './App.css';

function App() {
  const downloadTextFile = () =>{
    const element = document.createElement("a");
    const inputValue = document.getElementById("input").value;
    const file = new Blob([inputValue],{
      type: 'text/plain;charset=utf-8'
    })
    element.href = URL.createObjectURL(file);
    element.download = "NewDoc.txt";
    document.body.append(element);
    element.click();
  }
  return (
    <>
    <div>
      <input type="text" id="input" name="input"/>
      <br></br>
      <button type="button" onClick={downloadTextFile}>Download</button>
    </div>
    </>
  );
}

export default App;
