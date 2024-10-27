import React from "react";
import { useParams } from "react-router-dom";

export default function CharacterProfile() {
  const { id } = useParams();
  return <div className="text-white">{id}</div>;
}
