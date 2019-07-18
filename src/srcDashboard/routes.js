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
import AddNewPost from "./views/AddNewPost";

import User from "./views/User";
import Institutes from "./views/Institutes";
import Cities from "./views/Cities";
import Events from "./views/Events";
import Posts from "./views/Posts";

export default [
  {
    path: "/en",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/en/dashboard/show-institutes" />
  },
  {
    path: "/en/dashboard/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/en/dashboard/show-users",
    layout: DefaultLayout,
    component: User
  },
  {
    path: "/en/dashboard/add-new-user",
    layout: DefaultLayout,
    component: AddNewUser
  },
  {
    path: "/en/dashboard/add-new-institute",
    layout: DefaultLayout,
    component: AddNewInstitute
  },
  {
    path: "/en/dashboard/add-new-city",
    layout: DefaultLayout,
    component: AddNewCity
  },
  {
    path: "/en/dashboard/add-new-event",
    layout: DefaultLayout,
    component: AddNewEvent
  },
  {
    path: "/en/dashboard/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/en/dashboard/show-cities",
    layout: DefaultLayout,
    component: Cities
  },
  {
    path: "/en/dashboard/show-institutes",
    layout: DefaultLayout,
    component: Institutes
  },
  {
    path: "/en/dashboard/show-events",
    layout: DefaultLayout,
    component: Events
  },
  {
    path: "/en/dashboard/show-posts",
    layout: DefaultLayout,
    component: Posts
  }
];
