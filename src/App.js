import './styles.css';

export default function App() {
  fetch('/')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className='App'>
      <h1>Hello From F1 Around The World</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
