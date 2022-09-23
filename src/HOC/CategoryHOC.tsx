import { useEffect, useState } from 'react';
import { getData } from '../services/shared.services';

const CategoryHOC = (Component: any, entity: string) => {
  const WithCategory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      try {
        const fetchData = async () => {
          const data = await getData(entity);
          setData(data);
        };

        fetchData();

        return () => setData([]);
      } catch (error: any) {
        console.log(error.message);
      }
    }, []);

    return (
      <div>
        <Component data={data}></Component>
      </div>
    );
  };
  return WithCategory;
};

export default CategoryHOC;
