export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/en/dashboard/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Visualizar Instituições",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/en/dashboard/show-institutes",
    },
    {
      title: "Criar Instituição",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/en/dashboard/add-new-institute",
    },
    {
      title: "Visualizar Cidades",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/en/dashboard/show-cities",
    },
    {
      title: "Adicionar Cidade",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/en/dashboard/add-new-city",
    },
    {
      title: "Visualizar Eventos",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/en/dashboard/show-events",
    },
    {
      title: "Criar Evento",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/en/dashboard/add-new-event",
    },
    {
      title: "Visualizar Usuarios",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/en/dashboard/show-users",
    },
    {
      title: "Criar Usuario",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/en/dashboard/add-new-user",
    },
  ];
}
