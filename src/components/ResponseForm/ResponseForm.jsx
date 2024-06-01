import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addResponse } from '../../redux/responses/operations';

export function ResponseForm({ onClose }) {
  const company = useId();
  const dateResponse = useId();
  const select = useId();
  const link = useId();
  const eventDate = useId();
  const nameEvent = useId();

  const dispatch = useDispatch();

  const handleSubmit = values => {
    onClose();
    dispatch(addResponse(values));
    // dispatch(
    //   addResponse({
    //     company: values.company,
    //     resp: values.resp,
    //     selection: values.selection,
    //     link: values.link,
    //     dateEvent: values.dateEvent,
    //     nameEvent: values.nameEvent,
    //   })
    // );
    // console.log('add response ', values);
  };
  return (
    <Formik
      initialValues={{
        nameCompany: '',
        dateResp: '',
        reviewResult: '',
        link: '',
        dateEvent: '',
        interview: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={company}>Название компании</label>
        <Field type="text" name="nameCompany" id={company}></Field>
        <ErrorMessage name="nameCompany" />

        <label htmlFor={dateResponse}>Дата отклика на вакансию</label>
        <Field type="date" name="dateResp" id={dateResponse}></Field>
        <ErrorMessage name="dateResp" />

        <label htmlFor={select}>Стадия</label>
        <Field as="select" id={select} name="reviewResult">
          <option value="" label="Выберите стадию" />
          <option value="На рассмотрении" label="На рассмотрении" />
          <option value="Проигнорировано" label="Проигнорировано" />
          <option value="Назначили интервью" label="Назначили интервью" />
          <option value="Тестовое задание" label="Тестовое задание" />
          <option value="Отказ" label="Отказ" />
        </Field>
        <ErrorMessage name="reviewResult" />

        <label htmlFor={link}>Ссылка на вакансию</label>
        <Field type="link" name="link" id={link}></Field>
        <ErrorMessage name="link" />

        <label htmlFor={eventDate}>Дата события</label>
        <Field type="date" name="dateEvent" id={eventDate}></Field>
        <ErrorMessage name="dateEvent" />

        <label htmlFor={nameEvent}>Название события</label>
        <Field type="text" name="interview" id={nameEvent}></Field>
        <ErrorMessage name="interview" />

        <button type="submit">Добавить</button>
      </Form>
    </Formik>
  );
}
