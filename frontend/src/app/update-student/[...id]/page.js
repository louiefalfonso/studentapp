
"use client";
import React from "react";
import { useParams } from "next/navigation"; 
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateStudent from "@/components/UpdateStudent";

const UpdateStudentPage = () => {
  const params = useParams();
  return (
    <>
      <UpdateStudent studentId={params.id} />
    </>
  );
};

export default UpdateStudentPage;

