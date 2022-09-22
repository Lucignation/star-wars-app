import axiosInstance from '../../axio/index';

const fetchData = async () => {
  const res = await axiosInstance.get('films');
  return res.data;
};

const mockData = fetchData();

test('the data is an array of film', async () => {
  const data = await fetchData();
  expect(data).toMatchSnapshot(mockData);
});
