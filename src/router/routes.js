const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/Paneles/Dashboard.vue")
      },
      {
        path: "usuarios",
        component: () => import("pages/Paneles/Usuarios.vue")
      },
      { path: "ventas", component: () => import("pages/Paneles/Ventas.vue") },
      { path: "tickets", component: () => import("pages/Paneles/Tickets.vue") }
    ]
  },
  {
    path: "/catalogos",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "divisas",
        component: () => import("pages/Paneles/Catalogos/Divisas.vue")
      },
      {
        path: "categorias",
        component: () => import("pages/Paneles/Catalogos/Categorias.vue")
      },
    ]
  },
  {
    path: "/login",
    component: () => import("pages/Auth/Login.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
