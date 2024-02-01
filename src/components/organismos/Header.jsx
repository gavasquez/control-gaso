import React from 'react'
import { ContentHeader } from '../atomos/ContentHeader';
import { DataUser } from './DataUser';

export const Header = ({ state, setState }) => {
  return (
    <ContentHeader>
      <DataUser state={state} setState={() => setState(!state)} />
    </ContentHeader>
  )
}
