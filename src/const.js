export const SortType = {
  PRICE: 'price',
  POPULAR: 'popular',
};

export const SortOrder = {
  UP: 'up',
  DOWN: 'down',
};

export const AppRoute = {
  CATALOG: '/',
  CART: '/cart',
  BUY: '/buy',
  ABOUT: '/about',
  SERVICE:  '/service',
  PRODUCTS: '/products/:id',
};

export const PopupType = {
  ADD: 'add',
  DELETE: 'delete',
};

export const GuitarType = {
  ACOUSTIC: 'acoustic',
  ELECTRIC: 'electric',
  UKULELE: 'ukulele',
};

export const GuitarString = {
  FOUR: 4,
  SIX: 6,
  SEVEN: 7,
  TWELVE: 12,
};

export const PromoCode = {
  GITARAHIT: {
    name: 'GITARAHIT',
    discountPercent: 10,
  },
  SUPERGITARA: {
    name: 'SUPERGITARA',
    discount: 700,
  },
  GITARA2020: {
    name: 'GITARA2020',
    discount: 3000,
    maxDiscountPercent: 30,
  },
};

export const GUITARS_PER_PAGE = 9;

export const DEFAULT_PAGE = 1;
