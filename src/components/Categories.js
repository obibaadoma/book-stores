import { useDispatch, useSelector } from 'react-redux';
import { checkAction } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.check);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(checkAction());
        }}
      >
        Check Status

      </button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
