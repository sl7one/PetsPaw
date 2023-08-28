'use client';

import React, { useMemo } from 'react';
import './filter-form.scss';
import SelectComponent from '../SelectComponent/SelectComponent';

import { optionsLimitPerPage, orderOptions, typeOptions } from '../../utils/utils';
import { useFetch } from '@/app/hooks/useFeth';
import { OptionType } from '@/app/breeds/page';
import { getBreeds } from '@/app/API/api';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

interface IProps {
   onChange: (obj: { id: number; value: number | string }) => void;
   onClickSubmit: () => void;
   defaultValue: {
      breed: string;
      limit: number;
      order: string;
      type: string;
   };
}

export default function FilterForm({ onChange, onClickSubmit, defaultValue }: IProps) {
   const { data, isLoading, error } = useFetch({ api_cb: getBreeds, storage: false });

   const optionsBreeds: OptionType[] = useMemo(
      () =>
         data.map(({ name, id }: { name: string, id: string }) => ({
            label: name,
            value: id.toLowerCase(),
         })),
      [data]
   );

   return (
      <form className="filter-form" onSubmit={onClickSubmit}>
         <div className="filter-form__top">
            <div className="filter-form__item">
               <span className="filter-form__label"> Order</span>
               <SelectComponent
                  options={orderOptions}
                  id="order"
                  onChange={onChange}
                  defaulValue={{
                     label: defaultValue['order'],
                     value: defaultValue['order'].toLowerCase(),
                  }}
                  bgcolor="white"
               ></SelectComponent>
            </div>
            <div className="filter-form__item">
               <span className="filter-form__label"> Type</span>
               <SelectComponent
                  options={typeOptions}
                  id="type"
                  onChange={onChange}
                  defaulValue={{
                     label: defaultValue['type'],
                     value: defaultValue['type'].toLowerCase(),
                  }}
                  bgcolor="white"
               ></SelectComponent>
            </div>
         </div>
         <div className="filter-form__bottom">
            <div className="filter-form__item">
               <span className="filter-form__label"> Breed</span>
               <SelectComponent
                  options={optionsBreeds}
                  id="breed"
                  onChange={onChange}
                  defaulValue={{
                     label: defaultValue['breed'],
                     value: defaultValue['breed'].toLowerCase(),
                  }}
                  isDisabled={isLoading}
                  bgcolor="white"
               ></SelectComponent>
            </div>
            <div className="filter-form__item">
               <span className="filter-form__label"> Limit</span>
               <SelectComponent
                  options={optionsLimitPerPage}
                  id="limit"
                  onChange={onChange}
                  defaulValue={{
                     label: `${defaultValue['limit']} items per page`,
                     value: defaultValue['limit'],
                  }}
                  bgcolor="white"
               ></SelectComponent>
            </div>
            <Button
               type="submit"
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
