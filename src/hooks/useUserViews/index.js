import { useContext } from 'react';
import { ViewsContext } from '../../contextProviders/ViewsProvider';

const useUserViews = () => useContext(ViewsContext);

export default useUserViews;
