import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import Sort from '../sort/sort';
import GuitarList from '../guitar-list/guitar-list';
import Pagination from '../pagination/pagination';

import {getGuitars} from '../../store/selectors';
import {GUITARS_PER_PAGE, DEFAULT_PAGE, SortOrder} from '../../const';
import {getPaginatedGuitars, getSortedGuitars} from '../../utils';

export default function GuitarCatalog() {
  const guitars = useSelector(getGuitars);
  const [activePage, setActivePage] = useState(DEFAULT_PAGE);
  const [activeSortType, setActiveSortType] = useState('');
  const [activeSortOrder, setActiveSortOrder] = useState(SortOrder.UP);

  const totalPages = Math.ceil(guitars.length / GUITARS_PER_PAGE);

  const sortedGuitars = getSortedGuitars(guitars, activeSortType, activeSortOrder);
  const paginatedGuitars = getPaginatedGuitars(sortedGuitars, activePage);

  return (
    <div>
      <Sort activeSortType={activeSortType} setActiveSortType={setActiveSortType} activeSortOrder={activeSortOrder} setActiveSortOrder={setActiveSortOrder} />
      <GuitarList guitars={paginatedGuitars} />
      <Pagination totalPages={totalPages} activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
