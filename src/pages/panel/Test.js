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
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="col-span-full xl:col-auto">
          <form onSubmit={handleSubmit}>
            <Card
              header={"Card Header"}
              footer={
                <Button
                  id={"btnSave"}
                  type={"submit"}
                  label={"Save"}
                  color={"blue"}
                  icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
                />
              }
              cols={6}
            >
              <div className="col-span-6">
                <Input
                  id={"name"}
                  name={"name"}
                  type={"text"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label={"Name"}
                  required={true}
                />
                <Input
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label={"Email"}
                  required={true}
                />
              </div>
            </Card>
          </form>
        </div>
        <div className="col-span-2">
          <Card header={"Card Header"} cols={6}>
            <div className="col-span-6">{JSON.stringify(data, null, 2)}</div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default Test;
