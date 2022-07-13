// 1. 使用useRoutehooks,创建路由表

import { useRoutes } from "react-router-dom"
import Layout from "@/views/Layout"
useRoutes([
  {
    path: "/",
    element: Layout,
  },
])
