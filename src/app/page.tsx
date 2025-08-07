import { desc } from "drizzle-orm";
import Image from "next/image";

import CategorySelector from "@/components/commom/category-selector";
import Footer from "@/components/commom/footer";
import Header from "@/components/commom/header";
import ProductList from "@/components/commom/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

export default async function Home() {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });

  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });

  const categories = await db.query.categoryTable.findMany({});

  const marcas = [
    {
      image: "/simple-icons_adidas.svg",
      title: "Adidas",
    },

    {
      image: "/simple-icons_nike.svg",
      title: "Nike",
    },
    {
      image: "/simple-icons_puma.svg",
      title: "Puma",
    },
    {
      image: "/simple-icons_newbalance.svg",
      title: "New Balance",
    },
  ];

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
            src="/banner-01.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <div className="space-y-6 px-5">
          <h3 className="font-semibold">Marcas parceiras</h3>
          <div className="flex gap-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            {marcas.map((marca) => (
              <div
                key={marca.title}
                className="flex flex-col items-center gap-4"
              >
                <div className="b-[#F1F1F1] flex h-20 w-20 items-center justify-center gap-6 rounded-2xl border-[1.6px]">
                  <Image
                    src={marca.image}
                    alt={marca.title}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <p className="flex truncate text-sm font-medium">
                  {marca.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image
            src="/banner-02.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        <Footer />
      </div>
    </>
  );
}
