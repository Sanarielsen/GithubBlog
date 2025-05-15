import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "@globalLayouts/DefaultLayout";
import { Home } from "./page/Home";
import { Post } from "@features/Post/page/Post";

export function Router() {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}