import { components, DropdownIndicatorProps } from 'react-select';
import styles from './flatSelect.module.scss'

interface ColourOption {
	readonly value: string;
	readonly label: string;
	readonly color?: string;
	readonly isFixed?: boolean;
	readonly isDisabled?: boolean;
}

export const DropdownIndicator = (props: DropdownIndicatorProps<ColourOption, true>) => {
	return (
		<components.DropdownIndicator {...props}>
			Выбор
		</components.DropdownIndicator>
	)
}

export const Placeholder = 
	<div className={styles.placeholder}>
		Выбрать квартиру
	</div>

export const selectOptions = [
  { value: 'Mercury', label: 'Меркурий' },
  { value: 'Venus', label: 'Венера' },
  { value: 'Earth', label: 'Земля' },
  { value: 'Mars', label: 'Марс' },
  { value: 'Jupiter', label: 'Юпитер' },
  { value: 'Saturn', label: 'Сатурн' },
  { value: 'Uranus', label: 'Уран' },
  { value: 'Neptune', label: 'Нептун' },
]

export const selectStyles = {
		control: (baseStyles: any) => ({
			...baseStyles,
			border: 'none', background: 'transparent', width: '200px', fontSize: '14px'
		}),
		valueContainer: (baseStyles: any) => ({
			...baseStyles,
			padding: '0'
		}),
		indicatorSeparator: (baseStyles: any) => ({
			...baseStyles,
			display: 'none'
		}),
		indicatorsContainer: (baseStyles: any) => ({
			...baseStyles,
			width: '12px'
		}),
		singleValue: (baseStyles: any) => ({
			...baseStyles,
			fontSize: '14px', width: '200px', color: '#212121', 
		}),
		menu: (baseStyles: any) => ({
			...baseStyles,
			fontSize: '12px', width: '200px', padding: '0'
		}),
		menuList: (baseStyles: any) => ({
			...baseStyles,
			padding: '2px 0', margin: '0'
		}),
		option: (baseStyles: any) => ({
			...baseStyles,
			padding: '2px 0', margin: '0', textAlign: 'center'
		}),
}