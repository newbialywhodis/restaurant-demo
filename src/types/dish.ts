export interface DishVariant {
  readonly id: string;
  readonly name: string;
  readonly priceModifier: number;
  readonly category: "size" | "sauce" | "extra" | string;
}

export interface Dish {
  readonly title: string;
  readonly popular: boolean;
  readonly price: number;
  readonly category: string;
  readonly image: string;
  readonly description: string;
}
