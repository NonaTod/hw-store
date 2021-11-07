export class Cart {
  id!: number | null;
  products: CartProduct[] = [];

  constructor(id: number, products: CartProduct[]) {
    this.id = id || null;
    this.products = products || [];
  }
}

export class CartProduct {
  id!: number;
  name!: string;
  price!: number;
  discount!: number;
  quantity!: number;
}
