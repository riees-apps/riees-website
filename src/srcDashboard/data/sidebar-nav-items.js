export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/dashboard/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Visualizar Instituições",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/dashboard/show-institutes",
    },
    {
      title: "Criar Instituição",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/dashboard/add-new-institute",
    },
    {
      title: "Visualizar Cidades",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/dashboard/show-cities",
    },
    {
      title: "Adicionar Cidade",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/dashboard/add-new-city",
    },
    {
      title: "Visualizar Eventos",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/dashboard/show-events",
    },
    {
      title: "Criar Evento",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/dashboard/add-new-event",
    },
    {
      title: "Visualizar Usuarios",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/dashboard/show-users",
    },
    {
      title: "Criar Usuario",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/dashboard/add-new-user",
    },
  ];
}
