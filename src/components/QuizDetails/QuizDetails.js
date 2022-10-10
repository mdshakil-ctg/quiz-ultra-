import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizDetails = ({quiz, idx}) => {
    console.log(quiz)
    const [answer, setAnswer] =useState(false);
    const showAnswer = () =>{
        setAnswer(true);
    }
    const {options, question, correctAnswer } = quiz;
    return (
        <div className='bg-orange-300 m-6 p-6 rounded-md'>
            <div className='flex justify-between'>
            <p>Quiz:{idx + 1} </p>
            <p>{question}</p>
            <EyeIcon onClick={showAnswer} className="h-6 w-6  text-blue-500"/>
            </div>
            
            <div className='bg-red-300'>
                {
                    answer && <h4>Correct Answer :{correctAnswer}</h4>
                }
            </div>

            <div className='text-start'>
                {
                    options.map(option => <div>
                        <input type='radio' name='javascript'></input>
               <span className='ml-2'>{option}</span><br></br>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default QuizDetails;