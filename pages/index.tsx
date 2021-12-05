import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";

const IndexPage = () => (
  <div className="bg-gray-200">
    <NavBar />
    <div className="flex flex-col">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold pt-4 pb-4"> Dagens recept </h1>
      </div>
      <div className="mx-auto">
        <Card />
      </div>
      <div className="mx-auto">Refresh</div>
      <div className="mx-auto">Page bars</div>
    </div>
  </div>
);

export default IndexPage;
