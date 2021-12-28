import { useState } from "react";

import Jobs from "../Jobs/Index";
import Filter from "../Filter/Index"

import Container from '../../../generics/Container/index'

export default function Home() {
  const [filter, setFilter] = useState([])

  return (
    <Container>
      <Filter filter={filter} />
      <Jobs setFilter={setFilter} filter={filter} />
    </Container>
  )
}