import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';

export function ResponseForm({ onClose }) {
  const company = useId();
  const dateResponse = useId();
  const select = useId();
  const link = useId();
  const eventDate = useId();
  const nameEvent = useId();

  const handleSubmit = values => {
    onClose();
    console.log('add response ', values);
  };
  return (
    <Formik
      initialValues={{
        company: '',
        resp: '',
        selection: '',
        link: '',
        event: '',
        nameEvent: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={company}>Название компании</label>
        <Field type="text" name="company" id={company}></Field>
        <ErrorMessage name="company" />

        <label htmlFor={dateResponse}>Дата отклика на вакансию</label>
        <Field type="date" name="resp" id={dateResponse}></Field>
        <ErrorMessage name="resp" />

        <label htmlFor={select}>Стадия</label>
        <Field as="select" id={select} name="selection">
          <option value="" label="Выберите стадию" />
          <option value="На рассмотрении" label="На рассмотрении" />
          <option value="Проигнорировано" label="Проигнорировано" />
          <option value="Назначили интервью" label="Назначили интервью" />
          <option value="Тестовое задание" label="Тестовое задание" />
          <option value="Отказ" label="Отказ" />
        </Field>
        <ErrorMessage name="selection" />

        <label htmlFor={link}>Ссылка на вакансию</label>
        <Field type="link" name="link" id={link}></Field>
        <ErrorMessage name="link" />

        <label htmlFor={eventDate}>Дата события</label>
        <Field type="date" name="event" id={eventDate}></Field>
        <ErrorMessage name="event" />

        <label htmlFor={nameEvent}>Название события</label>
        <Field type="text" name="nameEvent" id={nameEvent}></Field>
        <ErrorMessage name="nameEvent" />

        <button type="submit">Добавить</button>
      </Form>
    </Formik>
  );
}
