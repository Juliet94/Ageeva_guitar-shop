import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import Sort from '../sort/sort';
import GuitarList from '../guitar-list/guitar-list';
import Pagination from '../pagination/pagination';

import {getGuitars, getFilterPriceFrom, getFilterPriceTo, getFilterType, getFilterStrings} from '../../store/selectors';
import {GUITARS_PER_PAGE, DEFAULT_PAGE, SortOrder} from '../../const';
import {getPaginatedGuitars, getSortedGuitars, getFilteredGuitars} from '../../utils';

export default function GuitarCatalog() {
  const guitars = useSelector(getGuitars);
  const filterPriceFrom = useSelector(getFilterPriceFrom);
  const filterPriceTo = useSelector(getFilterPriceTo);
  const filterType = useSelector(getFilterType);
  const filterStrings = useSelector(getFilterStrings);

  const [activePage, setActivePage] = useState(DEFAULT_PAGE);
  const [activeSortType, setActiveSortType] = useState('');
  const [activeSortOrder, setActiveSortOrder] = useState(SortOrder.UP);

  const filteredGuitars = getFilteredGuitars(guitars, filterPriceFrom, filterPriceTo, filterType, filterStrings);
  const sortedGuitars = getSortedGuitars(filteredGuitars, activeSortType, activeSortOrder);
  const paginatedGuitars = getPaginatedGuitars(sortedGuitars, activePage);

  const totalPages = Math.ceil(filteredGuitars.length / GUITARS_PER_PAGE);

  return (
    <div>
      <Sort activeSortType={activeSortType} setActiveSortType={setActiveSortType} activeSortOrder={activeSortOrder} setActiveSortOrder={setActiveSortOrder} />
      <GuitarList guitars={paginatedGuitars} />
      <Pagination totalPages={totalPages} activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
