export function normalizeProduct(product: any, config: any): any {
  const productFlat = product.productFlats[0]

  return {
    id: productFlat.id,
    name: productFlat.name,
    vendor: '',
    path: `/${productFlat.urlKey}`,
    slug: productFlat.urlKey,
    price: {
      value: productFlat?.price ?? 0,
      currencyCode: config.currencyCode,
    },
    descriptionHtml: productFlat.description,
    images: product.images.map((p: any) => ({
      url: p.url,
      altText: 'Random',
    })),
    variants: [],
    options: [],
  }
}