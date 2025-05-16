import { Outlet } from "react-router-dom";

import { Container } from "@globalStyles/DefaultLayoutContainer";
import { HeaderPage } from "@features/Header/page/HeaderPage";

export function DefaultLayout() {

  return (
    <Container>
      <HeaderPage/>
      <Outlet/>
    </Container>
  )
}