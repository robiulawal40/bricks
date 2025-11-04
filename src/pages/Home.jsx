import React from "react";
import Logo from "../components/Logo";
import Calculators from "./Calculators";
import Title from "../components/Title";
import Converters from "./Converters";
import Hero from "../components/Hero";

export default function Home() {
  return ( 
 <>
<Hero/>
  <Title>Construction Calculators</Title>
  <Calculators />

  <Title>Convertors</Title>
  <Converters />

  <footer className="bg-gray-100">
  <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
    <Logo>Bricks</Logo>
    </div>
    <p className="mx-auto mt-2 max-w-md text-center leading-relaxed text-gray-500">
      Accurate Construction Material Calculator.
    </p>
  </div>
</footer>
</>);
}
