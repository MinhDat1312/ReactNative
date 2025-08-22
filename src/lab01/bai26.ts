import { Product } from "./bai08";

export class Order {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    calculateTotal(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
}