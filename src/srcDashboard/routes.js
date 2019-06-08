import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard/blog-overview" />
  },
  {
    path: "/dashboard/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/dashboard/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/dashboard/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/dashboard/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/dashboard/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/dashboard/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/dashboard/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
