import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "@globalLayouts/DefaultLayout";
import { Home } from "./page/Home";

export function Router() {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Post />} /> */}
      </Route>
    </Routes>
  )
}