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
        <article className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">T-shirt</h2>
          <h3>Size</h3>
          <ul className="flex gap-3">
            {size.map((size) => {
              return (
                <li key={size} className={`${searchParams.get("size") == size && "bg-slate-100"} p-2 border hover:bg-slate-100`}>
                  <Link href={`?${createQueryString("size", size)}`}>{size}</Link>
                </li>
              );
            })}
          </ul>
          <h3>Color</h3>
          <ul className="flex gap-3">
            {color.map((color) => {
              return (
                <li key={color} className={`${searchParams.get("color") == color && "bg-slate-100"} p-2 border hover:bg-slate-100`}>
                  <Link href={`?${createQueryString("color", color)}`}>{color}</Link>
                </li>
              );
            })}
          </ul>
          <Link href={`/payment/?${searchParams}`} className="bg-green-800 text-white px-16 py-3 mt-4 inline-block w-fit">
            Buy
          </Link>
        </article>
      </section>
    </main>
  );
}
