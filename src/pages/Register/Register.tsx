import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Form = styled.form`
margin: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
`

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        error={errors.firstName}
        helperText={errors.firstName?.message}
        id="outlined"
        label="Nombre"
        variant="outlined"
        {...register("firstName")}
      />
      <TextField
        error={errors.lastName}
        helperText={errors.lastName?.message}
        id="outlined-basic"
        label="Nombre"
        variant="outlined"
        {...register("lastName")}
        />
      <TextField
        error={errors.age}
        helperText={errors.age?.message}
        id="outlined-basic"
        label="Nombre"
        variant="outlined"
        type="number"
        {...register("age")} />
      <input type="submit" />
    </Form>
  )
}
