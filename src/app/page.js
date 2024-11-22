"use client";

import Image from "next/image";
import Link from "next/link";
import tshirt from "@/app/assets/tshirt.jpg";
import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

const size = ["xs", "s", "m", "l", "xl"];
const color = ["blue", "grey", "green"];

export default function Home() {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <main className="m-5">
      <section className="grid gap-6 md:grid-cols-2">
        <Image src={tshirt} alt="product image"></Image>
        <form action="/payment" className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">T-shirt</h2>
          <fieldset>
            <legend>Size</legend>
            <div className="flex gap-3">
              {size.map((size) => {
                return (
                  <label for={size} className="p-2 border hover:bg-slate-100">
                    <input id={size} type="radio" name="size" value={size} />
                    {size}
                  </label>
                );
              })}
            </div>
          </fieldset>
          <fieldset>
            <legend>Color</legend>
            <div className="flex gap-3">
              {color.map((color) => {
                return (
                  <label for={color} className="p-2 border hover:bg-slate-100">
                    <input id={color} type="radio" name="color" value={color} />
                    {color}
                  </label>
                );
              })}
            </div>
          </fieldset>
          <button className="bg-green-800 text-white px-16 py-3 mt-4 inline-block w-fit">Buy</button>
        </form>
      </section>
    </main>
  );
}
