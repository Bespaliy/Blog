import { useAppDispatch } from '../../common/api/hooks';
import { FilterCheckbox, FilterContainer } from './filterBlogs.style';
import { useState, useRef } from 'react';
import Input from '../../common/components/Input';
import Button from '../../common/components/Button';
import { filterBlogs, popularBlogs } from './filterBlogSlice';

const FilterBlogs = () => {

  const [filterTriger, setTrigger] = useState('#');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(filterBlogs(filterTriger.trim()));
    const popular = inputRef.current?.checked ? 'popular' : 'all';
    dispatch(popularBlogs(popular))
    setTrigger(() => '#');
  }

  return (
    <FilterContainer>
      <Input name='filter' label='FIND BY HASHTAG' value={filterTriger} setValue={setTrigger} />
      <FilterCheckbox>
        <Input name='all' value='all' label='ALL' type='checkbox' inputRef={inputRef} />
      </FilterCheckbox>
      <Button name='FIND!' type='button' onClick={handleClick} />
    </FilterContainer>
  )
}

export default FilterBlogs;