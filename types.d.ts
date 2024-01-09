type ImgT = string;
type ProductT = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: ImgT;
  images: ImgT[];
};

export type PersonT = {
  name: string;
  age: number;
  address: string;
};
