export interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
  category: ProductCategory;
  sizes: Size[];
  colors: Color[];
  inStock: boolean;
  featured: boolean;
  new: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  hex: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: Size;
  color: Color;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}
