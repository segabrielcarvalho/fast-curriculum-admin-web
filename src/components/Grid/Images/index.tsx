'use client';
import clsx from 'clsx';
import Image from 'next/image';

interface Product {
  name: string;
  href: string;
}

const createProduct = ({ name, href }: Product) => ({
  id: name,
  name,
  href,
});

export default function ImageGrid({
  number = 3,
  gridColl = 3,
}: {
  number: number;
  gridColl: number;
}) {
  const products = Array.from({ length: number }).map((_, i) =>
    createProduct({
      name: `CQ500-CT-107_3_${i + 1}.png`,
      href: 'https://amdsaude.com.br/wp-content/uploads/2021/11/cranio-5-1.png.webp',
    }),
  );
  return (
    <div>
      <div className="max-w-2xl px-4 sm:px-6 lg:max-w-full ">
        <div
          className={clsx(
            'grid grid-cols-1 gap-y-12  sm:gap-x-6 xl:gap-x-8',
            `lg:grid-cols-${gridColl}`,
          )}
        >
          {products.map(product => (
            <div key={product.id}>
              <div className="relative">
                <div
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  <Image
                    alt={product.id}
                    src={product.href}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm text-center font-medium text-secondary-1100">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
