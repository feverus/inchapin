import { components, DropdownIndicatorProps } from 'react-select'
import { ReactSVG } from 'react-svg'
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
			<ReactSVG src='/svgs/chevron-down.svg' className={styles.chevron} />
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
			border: 'none', background: 'transparent', width: '200px', fontSize: '15px', cursor: 'pointer',
		}),
		valueContainer: (baseStyles: any) => ({
			...baseStyles,
			padding: '0'
		}),
		placeholder: (baseStyles: any) => ({
			...baseStyles,
			margin: '0'
		}),
		indicatorSeparator: (baseStyles: any) => ({
			...baseStyles,
			display: 'none'
		}),
		indicatorsContainer: (baseStyles: any) => ({
			...baseStyles,
			width: '14px', padding: '0px'
		}),
		singleValue: (baseStyles: any) => ({
			...baseStyles,
			maxWidth: '180px',
			color: '#FFF',
			fontStyle: 'normal',
			fontWeight: '600',
			lineHeight: '100%',
			textTransform: 'uppercase',
			letterSpacing: '1.05px',
		}),
		menu: (baseStyles: any) => ({
			...baseStyles,
			width: '160px', padding: '0px', background: '#2F80EDf0', marginTop: '3px',
		}),
		menuList: (baseStyles: any) => ({
			...baseStyles, 
			padding: '0', margin: '0'
		}),
		option: (baseStyles: any) => ({
			...baseStyles,
			padding: '5px 0', margin: '0', textAlign: 'center'
		}),
}