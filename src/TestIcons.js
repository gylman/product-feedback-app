import Arrow from "./components/UI/Arrow";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import SelectBox from "./components/UI/SelectBox";
import Theme from "./Theme";
import cuid from "cuid";
import Tick from "./components/UI/Tick";

function App() {
  const options = [
    { label: "Feature" },
    { label: "UI" },
    { label: "UX" },
    { label: "Ehnhancement" },
    { label: "Bug" },
  ];

  const sortOptions = [
    { label: "Most upvotes" },
    { label: "Least upvotes" },
    { label: "Most comments" },
    { label: "Least comments" },
  ];

  return (
    <Theme>
      <Button kind="default" paint="#AD1FEA">
        Button 1
      </Button>
      <Button kind="back" paint="#373F68">
        <Arrow direction="left" paint="#CDD2EE" />
        Go back
      </Button>
      <Button kind="back" paint="transparent">
        <Arrow direction="left" paint="#4661E6" />
        Go back
      </Button>
      <Button kind="upvote">
        <Arrow direction="up" paint="#4661E6" />
        99
      </Button>
      <Button kind="tag">UX</Button>
      <Input defaultValue="Lorem Ipsum" />
      <Input active defaultValue="Lorem Ipsum" />
      <Input error defaultValue="Lorem Ipsum" />
      <SelectBox options={options}>
        <Arrow direction="down" paint="#4661E6" />
      </SelectBox>
      <div style={{ height: "10px" }}></div>
      <SelectBox options={options} active>
        <Arrow direction="down" paint="#4661E6" />
      </SelectBox>
      <Tick />
      <SelectBox options={sortOptions} sortButton>
        <Arrow direction="down" paint="#FFFFFF" />
      </SelectBox>
    </Theme>
  );
}

export default App;
