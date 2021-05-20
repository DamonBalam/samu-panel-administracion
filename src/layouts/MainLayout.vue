<template>
  <q-layout view="hHh Lpr fFf">
    <q-header>
      <q-toolbar class="bg-cyan">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Samu | Administración </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    <q-card flat>
      <q-card-section>

      </q-card-section>
    </q-card>
     <q-separator />
      <q-list>
        <!-- <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label> -->
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-expansion-item icon="inventory" label="Catalogos">
          <q-list>
            <essential-link
              :header-inset-level="1"
              :content-inset-level="2"
              v-for="link in catalogosLinks"
              :key="link.title"
              v-bind="link"
              class="q-ml-lg"
            />
          </q-list>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Dashboard",
    // caption: "quasar.dev",
    icon: "dashboard",
    link: "/",
  },
  {
    title: "Usuarios",
    // caption: "github.com/quasarframework",
    icon: "face",
    link: "/usuarios",
  },
  {
    title: "Ventas",
    // caption: "chat.quasar.dev",
    icon: "paid",
    link: "/ventas",
  },
  {
    title: "Tickets",
    // caption: "forum.quasar.dev",
    icon: "receipt",
    link: "/tickets",
  },
];

const catalogosLinks = [
  {
    title: "Divisas",
    // caption: "forum.quasar.dev",
    icon: "trending_up",
    link: "/catalogos/divisas",
  },
  {
    title: "Categorías",
    // caption: "forum.quasar.dev",
    icon: "view_in_ar",
    link: "/catalogos/categorias"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      catalogosLinks: catalogosLinks
    };
  },
};
</script>
