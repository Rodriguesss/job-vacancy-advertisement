import { useState } from "react";

import Jobs from "../Jobs/Index";
import Filter from "../Filter/Index"

import Container from '../../../generics/Container/index'
import Credit from "../Credit/Index";

export default function Home() {
  const [filter, setFilter] = useState([])

  return (
    <Container min-width="1400">
      <Filter setFilter={setFilter} filter={filter} />
      <Jobs setFilter={setFilter} filter={filter} />
      <Credit />
    </Container>
  )
}