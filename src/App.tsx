import "./App.css";
import Heading from "./Components/Heading";
import Section from "./Components/Section";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <Heading title={"Hello Typescript!"} />
      <Section>Testing section part</Section>
      <TodoList />
    </>
  );
}

export default App;
