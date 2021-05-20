<template>
  <div class="fondo">
    <div class="contenedor">
      <section class="main q-px-sm">
        <div class="contenedor-formulario">
          <h3 class="text-weight-bold q-mb-none">Hola!</h3>
          <p class="text-h6">Bienvenido al panel administrativo de Samu</p>
          <q-form class="text-center">
            <q-input
              class="q-mb-md"
              dense
              rounded
              outlined
              v-model="usuario"
              label="Usuario"
            />
            <q-input
              class="q-mb-md"
              dense
              rounded
              outlined
              v-model="usuario"
              label="Contraseña"
            />
            <q-btn class="bg-magenta text-white" rounded>Iniciar Sesión</q-btn>
          </q-form>
        </div>
      </section>
      <section class="img"></section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.fondo {
  background-color: $cyan;
  height: 100vh;
  padding: 2rem;
}
.contenedor {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  height: 90vh;
  margin: 0 auto;
  -webkit-box-shadow: -4px 10px 15px -4px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: -4px 10px 15px -4px rgba(0, 0, 0, 0.68);
  box-shadow: -4px 10px 15px -4px rgba(0, 0, 0, 0.68);
}
.main {
  background-color: white;
  width: 50%;
  height: 100%;
  border-radius: 5px 5px 5px 5px;
  display: flex;
  justify-content: center;
}
.img {
  background-image: url("../../assets/img/administracion.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: right;
  height: 100%;
  width: 60%;
  border-radius: 0 5px 5px 0;
  z-index: 99;
}
.contenedor-formulario {
  margin-top: 10rem;
}
</style>
