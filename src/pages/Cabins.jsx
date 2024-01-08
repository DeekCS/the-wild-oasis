import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [cabins, setCabins] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const cabins = await getCabins();
      console.log(cabins);
      setCabins(cabins);
    };
    fetchData();
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <ul>
        {cabins.map((cabin) => (
          <li key={cabin.id}>
            {cabin.name} - {cabin.description}
          </li>
        ))}
      </ul>
    </Row>
  );
}

export default Cabins;
