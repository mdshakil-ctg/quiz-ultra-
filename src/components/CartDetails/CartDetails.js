import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const CartDetails = () => {
    const quizes = useLoaderData();
    const {name} = quizes.data;
   
    return (
        <div>
            <h2>Quiz of {name}</h2>
            <div className='w-[600px] mx-auto '>
                {
                    quizes.data.questions.map((quiz, idx) => <QuizDetails key={quiz.id} quiz={quiz} idx={idx}></QuizDetails>)
                }
            </div>
        </div>
    );
};

export default CartDetails;