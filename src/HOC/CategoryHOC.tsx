import { useEffect, useState } from 'react';
import axiosInstance from '../axio/index';

const CategoryHOC = (Component: any, entity: string) => {
  const WithCategory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      try {
        const fetchData = async () => {
          const url = entity;
          const res: any = await axiosInstance.get(url);
          setData(res.data.results);
        };

        fetchData();

        return () => setData([]);
      } catch (error: any) {
        console.log(error.message);
      }
    }, []);

    console.log(data);

    return (
      <div>
        <Component data={data}></Component>
      </div>
    );
  };
  return WithCategory;
};

export default CategoryHOC;
