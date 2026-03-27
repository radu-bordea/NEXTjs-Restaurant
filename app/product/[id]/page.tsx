import Price from "@/components/Price";
import Image from "next/image";
import { getProductById } from "@/lib/actions/productActions";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen px-4 md:pt-20 lg:pt-40 py-10 lg:px-20 xl:px-40">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        {product.img && (
          <div className="group relative w-full h-75 md:h-112.5 rounded-2xl p-6">
            <div className="relative w-full h-full overflow-hidden rounded-xl transition-all duration-900 group-hover:rotate-6">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-contain transition-transform duration-1000 hover:rotate-6"
                priority
              />
            </div>
          </div>
        )}

        {/* INFO */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl xl:text-5xl font-bold tracking-tight">
            {product.title}
          </h1>

          <p className="text-muted-foreground leading-relaxed">
            {product.desc}
          </p>

          <Price
            price={product.price}
            id={product.id}
            options={product.options}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
