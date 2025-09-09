import React from 'react'
import { useDispatch } from 'react-redux'
import { newsNotesAction } from '../store/news-todo-store';
import DisplayNewsTodo from './DisplayNewsTodo';
import { useForm } from "react-hook-form"
import NewsTodoSlider from './NewsTodoSlider';

const NewsTodo = () => {
  
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors},
  } = useForm();

   function onSubmit(value) {
    const title = value.title;
    const date = value.date;
    const note = value.note
    console.log(title, date, note);
    dispatch(newsNotesAction.addNote({ title, date, note }))
    reset();

  }
  return (
    <>
    <NewsTodoSlider/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="w-50">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">Title</label>
                <input {...register('title',{required: true})}
                  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              {errors.title && <p>title is requore</p>}

              <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">Date</label>
                <input {...register('date', { required: true })}
                  type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputNotes" className="form-label">Write news Notes</label>
                <textarea {...register('note')} type="text" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primary" >Add</button>
            </form>
          </div>
        </div>
      </div>
      <DisplayNewsTodo />
    </>
  )
}

export default NewsTodo
