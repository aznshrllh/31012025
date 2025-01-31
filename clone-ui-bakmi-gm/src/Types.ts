export type TReedemReward = {
  id: number;
  name: string;
  imgUrl: string;
  point: number;
};

export type TPrivillages = {
  id: number;
  name: string;
  imgUrl: string;
  expire: string;
};

export type TLocation = {
  id: number;
  name: string;
  address: string;
  distance: number;
};
