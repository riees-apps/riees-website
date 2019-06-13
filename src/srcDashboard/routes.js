import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import AddNewInstitute from "./views/AddNewInstitute";
import AddNewCity from "./views/AddNewCity";
import AddNewEvent from "./views/AddNewEvent";
import AddNewUser from "./views/AddNewUser";

import User from "./views/User";
import Institutes from "./views/Institutes";
import Cities from "./views/Cities";
import Events from "./views/Events";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard/show-institutes" />
  },
  {
    path: "/dashboard/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/dashboard/show-users",
    layout: DefaultLayout,
    component: User
  },
  {
    path: "/dashboard/add-new-user",
    layout: DefaultLayout,
    component: AddNewUser
  },
  {
    path: "/dashboard/add-new-institute",
    layout: DefaultLayout,
    component: AddNewInstitute
  },
  {
    path: "/dashboard/add-new-city",
    layout: DefaultLayout,
    component: AddNewCity
  },
  {
    path: "/dashboard/add-new-event",
    layout: DefaultLayout,
    component: AddNewEvent
  },
  {
    path: "/dashboard/show-cities",
    layout: DefaultLayout,
    component: Cities
  },
  {
    path: "/dashboard/show-institutes",
    layout: DefaultLayout,
    component: Institutes
  },
  {
    path: "/dashboard/show-events",
    layout: DefaultLayout,
    component: Events
  }
];
