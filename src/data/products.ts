export interface Product {
  id: number;
  name: string;
  power: string;
  area: string;
  brand: string;
  price: number;
  image: string;
  features: string[];
  energyClass: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Daikin FTXS25K",
    power: "2.5 кВт",
    area: "25 м²",
    brand: "Daikin",
    price: 45000,
    image: "/img/8a37c2b9-28ad-474f-9fdc-6a2ecd6a78dd.jpg",
    features: ["Инверторный", "Wi-Fi", "Самоочистка"],
    energyClass: "A+++",
  },
  {
    id: 2,
    name: "Mitsubishi MSZ-AP25VG",
    power: "2.5 кВт",
    area: "25 м²",
    brand: "Mitsubishi",
    price: 52000,
    image: "/img/f9bd0d3b-a1f4-4792-9077-d2f0afb5977c.jpg",
    features: ["Инверторный", "Плазменная очистка", "Тихий режим"],
    energyClass: "A++",
  },
  {
    id: 3,
    name: "LG Dual Cool S09ET",
    power: "2.6 кВт",
    area: "26 м²",
    brand: "LG",
    price: 38000,
    image: "/img/8a37c2b9-28ad-474f-9fdc-6a2ecd6a78dd.jpg",
    features: ["Двойное охлаждение", "Smart ThinQ", "Золотое покрытие"],
    energyClass: "A++",
  },
  {
    id: 4,
    name: "Samsung AR12TXHZAWKNUA",
    power: "3.5 кВт",
    area: "35 м²",
    brand: "Samsung",
    price: 41000,
    image: "/img/f9bd0d3b-a1f4-4792-9077-d2f0afb5977c.jpg",
    features: ["Wind-Free", "Smart Control", "Быстрое охлаждение"],
    energyClass: "A++",
  },
];

export const brands = ["Daikin", "Mitsubishi", "LG", "Samsung"];
