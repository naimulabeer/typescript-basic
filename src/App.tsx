import "./App.css";
import Heading from "./Components/Heading";
import Section from "./Components/Section";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <Heading title={"Hello World!"} />
      <Section>The section part</Section>
      <TodoList />
    </>
  );
}

export default App;
