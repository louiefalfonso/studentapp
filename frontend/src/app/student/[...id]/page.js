"use client";
import React from "react";
import { useParams } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentStudent from "@/components/CurrentStudent";

const StudentPage = () => {
  const { id } = useParams();

  return (
    <>
      <CurrentStudent studentId={id} />
    </>
  );
};

export default StudentPage;
