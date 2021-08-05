import { useContext } from 'react';
import { ViewsContext } from '../../contextProviders/ViewsProvider';

export const useUserViews = () => useContext(ViewsContext);
