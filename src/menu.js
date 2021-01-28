import React from "react";
export const MENUITEMS = [
  {
    title: "Home",
    icon: <i className="pe-7s-home pe-lg"></i>,
    path: `${process.env.PUBLIC_URL}/dashboard/default`,
    type: "sub",
    active: true,
    bookmark: true,
  },
  {
    title: "LP Royale",
    icon: <i className="pe-7s-portfolio pe-lg"></i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/ui-element/statecolor`,
    active: false,
    bookmark: true,
  },
  {
    title: "All Pools",
    icon: <i className="pe-7s-note2"></i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/form/form-validation`,
    active: false,
  },
  {
    title: "About/FAQs",
    icon: <i className="pe-7s-browser"></i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/cards/basic`,
    active: false,
  },
  {
    title: "Pro",
    icon: <i className="pe-7s-graph3"></i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/charts/apexcharts`,
    active: false,
  },
];
