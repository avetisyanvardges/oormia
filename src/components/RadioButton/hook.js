import {Styles} from './styles';
import {normalize} from 'assets/RootStyles/normalize';

function useContainer(props) {
  const styles = Styles();
  const {size, active} = props;
  const active_size = size - normalize(10);
  return {
    styles,
    active_size,
    size,
    active,
  };
}

export default useContainer;
