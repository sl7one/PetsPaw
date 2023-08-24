'use client';

import React, {  useMemo } from 'react';
import './filter-form.scss';
import SelectComponent from '../SelectComponent/SelectComponent';

import { optionsLimitPerPage, orderOptions, typeOptions } from '../../utils/utils';
import { useFetch } from '@/app/hooks/useFeth';
import { OptionType } from '@/app/breeds/page';
import { getBreeds } from '@/app/API/api';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export default function FilterForm() {
   const { data, isLoading, error } = useFetch({ api_cb: getBreeds });

   const optionsBreeds: OptionType[] = useMemo(
      () =>
         data.map(({ name }: { name: string }) => ({
            label: name,
            value: name.toLowerCase(),
         })),
      [data]
   );

   const onChangeOrder = () => {
      console.log('order');
   };

   const onClickSubmit = () => {
      console.log('submit');
   };

   return (
      <form className="filter-form">
         <div className="filter-form__top">
            <div className="filter-form__item">
               <span className="filter-form__label"> Order</span>
               <SelectComponent
                  options={orderOptions}
                  id="order"
                  onChange={onChangeOrder}
                  defaulValue={orderOptions[0]}
                  bgcolor="white"
                  width={290}
               ></SelectComponent>
            </div>
            <div className="filter-form__item">
               <span className="filter-form__label"> Type</span>
               <SelectComponent
                  options={typeOptions}
                  id="type"
                  onChange={onChangeOrder}
                  defaulValue={typeOptions[1]}
                  bgcolor="white"
                  width={290}
                  marginLeft={20}
               ></SelectComponent>
            </div>
         </div>
         <div className="filter-form__bottom">
            <div className="filter-form__item">
               <span className="filter-form__label"> Breed</span>
               <SelectComponent
                  options={optionsBreeds}
                  id="breed"
                  onChange={onChangeOrder}
                  defaulValue={{ label: 'None', value: 'none' }}
                  isDisabled={isLoading}
                  bgcolor="white"
                  width={290}
               ></SelectComponent>
            </div>
            <div className="filter-form__item">
               <span className="filter-form__label"> Limit</span>
               <SelectComponent
                  options={optionsLimitPerPage}
                  id="limit"
                  onChange={onChangeOrder}
                  defaulValue={optionsLimitPerPage[0]}
                  bgcolor="white"
                  width={240}
               ></SelectComponent>
            </div>
            <Button
               type="submit"
               onClick={onClickSubmit}
               className="submit"
            >
               <Icon
                  name="icon-update"
                  width={20}
                  height={17.5}
               ></Icon>
            </Button>
         </div>
      </form>
   );
}
