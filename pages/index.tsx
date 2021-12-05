import { Card } from "../components/Card";

const IndexPage = () => (
  <div className="grid grid-rows-2">
    <div className="mx-auto">
      <h1> Dagens recept </h1>
    </div>
    <div className="mx-auto">
      <Card />
    </div>
  </div>
);

export default IndexPage;
