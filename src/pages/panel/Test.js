import React, { useState, useEffect } from "react";
import PanelLayout from "./PanelLayout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Card from "../../components/card/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { store } from "../../services/routeService";
import Loading from "../../components/errors/Loading";

const Test = () => {
  const breadCrumbs = {
    page: "Test",
    data: [{ page: "Test", route: "/test" }],
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await store({ name, email });
      navigate("/test");
    } catch (error) {
      console.log(error);
    }
  };

  const { data, loading, error } = useFetch("/users");
  useEffect(() => {
    if (data) {
      console.log("Data loaded:", data);
    }
  }, [data]);

  if (loading) return <Loading/>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <PanelLayout>
        <section className="min-h-screen">
          <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-4 gap-4 mb-4 dark:bg-gray-900">
          <Breadcrumbs breadCrumbs={breadCrumbs} />
          <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
        </div>
          <div className="grid grid-cols-2 px-4 pt-6 lg:grid-cols-4 gap-4 mb-4 dark:bg-gray-900">
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
      </div>
          
          </section>
      </PanelLayout>
    </>
  );
};

export default Test;
