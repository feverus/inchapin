'use client'

import styles from './requestCallForm.module.scss'
import { useSelector, useDispatch } from "react-redux"
import { setRequestCallFormClosed, setRequestCallFormUnmounted } from "@/store/setSlice"
import { RootState } from '@/store/store'
import { Formik, Form, FormikErrors, useFormik } from 'formik'
import { TextField, Button, Tooltip } from '@mui/material'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { useEffect } from 'react'

const tooltipPolitic = 'Здесь должна быть ссылка на политику обработки персональных данных'
const maskPlaceholder='_'

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Слишком короткое имя')
    .max(50, 'Слишком длинное имя')
    .required('Не указано имя'),
  phone: Yup.string()
    .required('Не указан номер телефона')
    .test('test-phone', 'Ошибка в формате телефона', value => value.indexOf(maskPlaceholder)===-1),
  email: Yup.string()
    .email('Ошибка в формате e-mail')
    .required('Не указан e-mail'),
})

interface BaseObject {
  [key: string]: string,
}

const showErrors = (errors:FormikErrors<BaseObject>) => {
  for (const key in errors) {
    if (errors.hasOwnProperty.call(errors, key)) {
      return (<div className={styles.errorStatus}>{errors[key]}</div>)
    }
  }
  return <></>
}

export default function RequestCallForm() {
  const dispatch = useDispatch()
  const requestCallFormOpened = useSelector((state:RootState) => state.set.requestCallFormOpened)
  const requestCallFormIsUnmounting = useSelector((state:RootState) => state.set.requestCallFormIsUnmounting)
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => console.log(values)
  })

  const slowCloseForm = async () => {
    dispatch(setRequestCallFormUnmounted())
    await new Promise(resolve => setTimeout(resolve, 1000))
    dispatch(setRequestCallFormClosed())    
  }

  const escHandler = 
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' ) {
        event.preventDefault()
        slowCloseForm()
      }
    }

  const formStyle = requestCallFormIsUnmounting ? styles.wrap + ' ' + styles.unMaunting : styles.wrap

  useEffect(() => {
    if (requestCallFormOpened) {
      document.addEventListener('keydown', escHandler)
    }
  
    return () => {
      document.removeEventListener('keydown', escHandler)
    }
  }, [requestCallFormOpened])
  

  const formWithWrap = 
    <div className={formStyle}>
      <form 
        className={styles.form}
        onSubmit={formik.handleSubmit}
      >
        <h2>Заказать звонок</h2>
        <TextField
          name = 'name'
          value={formik.values.name}
          className={styles.input}
          onChange={formik.handleChange}
          label="ВАШЕ ИМЯ"
          variant='standard'
        />

        <InputMask
          mask="+7 (999) 999-99-99"
          value={formik.values.phone}
          disabled={false}
          maskPlaceholder={maskPlaceholder}
          onChange={formik.handleChange}
        >
          <TextField
            name = 'phone'
            value={formik.values.phone}
            className={styles.input}
            label="ТЕЛЕФОН"
            variant='standard'
          />
        </InputMask>

        <TextField
          name = 'email'
          value={formik.values.email}
          className={styles.input}
          onChange={formik.handleChange}
          label="E-MAIL"
          variant='standard'
        />

        <p>Нажимая на кнопку «Отправить», вы ознакомлены и соглашаетесь с <Tooltip title={tooltipPolitic}><span>политикой обработки персональных данных</span></Tooltip></p>

        <Button
          type="submit"
          className={styles.submit}
        >
          Отправить
        </Button> 

        {showErrors(formik.errors)}
        
      </form>

    <button className={styles.close} onClick={() => slowCloseForm()}>&nbsp;</button>
  </div>

  return (    
    requestCallFormOpened && formWithWrap      
  )
}