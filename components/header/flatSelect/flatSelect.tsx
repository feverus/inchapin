'use client'

import { useState } from 'react'
import styles from './flatSelect.module.scss'
import Select from 'react-select'
import { selectOptions, selectStyles, DropdownIndicator, Placeholder } from './selectService'

export default function FlatSelect() {
  const [selectedOption, setSelectedOption] = useState(undefined)

  return (
    <Select
      instanceId={'FlatSelect'} 
      className={styles.select}
      defaultValue={selectedOption}
      onChange={(e) => setSelectedOption}
      options={selectOptions}
      styles={selectStyles}
      components={{ DropdownIndicator}} 
      isSearchable={false}
      placeholder={ Placeholder }
    />
  )
}
