import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";

export const Content = () => (
  <section className="content">
    <Sidebar />
    <Tasks />
  </section>
);
