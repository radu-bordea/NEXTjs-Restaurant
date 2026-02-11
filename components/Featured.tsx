import { products } from "@/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Featured = () => {
  const allProducts = products;
  const featuredProducts6 = allProducts.slice(0, 6);

  return (
    <section className="w-full py-12">
      {/* Section Header */}
      <div className="mx-auto mb-6 flex max-w-7xl flex-col gap-2 px-4">
        <h2 className="text-2xl font-bold text-amber-600 tracking-tight md:text-3xl">
          Featured Burgers
        </h2>
        <p className="text-sm text-muted-foreground">
          Our most popular picks, freshly grilled and loved by everyone.
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="w-full overflow-x-auto scroll-smooth">
        <div className="flex w-max snap-x snap-mandatory gap-6 px-4 py-4">
          {featuredProducts6.map((item) => (
            <div
              key={item.id}
              className="group relative flex h-[60vh] w-[80vw] max-w-sm snap-center flex-col justify-between rounded-2xl border p-4 duration-300 md:w-[45vw] xl:w-[28vw] transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-500 bg-card shadow-sm dark:hover:shadow-neutral-700"
            >
              {/* IMAGE */}
              {item.img && (
                <div className="relative h-44 w-full overflow-hidden rounded-xl hover:rotate-60 transtition-all duration-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
              )}

              {/* TEXT */}
              <div className="mt-4 flex flex-col items-center gap-3 text-center">
                <h3 className="text-lg font-semibold md:text-xl">{item.title} <sup className="text-sm text-muted-foreground">{item.category}</sup></h3>

                <p className="line-clamp-3 text-sm text-muted-foreground">{item.desc}</p>

                <span className="text-xl font-bold text-primary">${item.price}</span>

                <Button className="mt-2 w-full cursor-pointer">Add to cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
