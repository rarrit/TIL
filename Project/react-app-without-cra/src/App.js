const apiUrl = process.env.APP_API_URL;

console.log("API URL:", apiUrl);

const App = () => {
  return <h1>Hello React</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);