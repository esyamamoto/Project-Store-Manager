const mockProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];
const product01 = {
  id: 1,
  name: 'Machado do Thor Stormbreaker',
};

const productOK = { status: 'SUCCESS', data: product01 };
const notFound = { status: 'NOT_FOUND', data: { message: 'Product not found' } };

module.exports = {
  mockProducts,
  product01,
  productOK,
  notFound,
};