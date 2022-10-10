import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const QuizDetails = ({quiz, idx}) => {
    console.log(quiz)
    const [answer, setAnswer] =useState(false);
    const [number, setNumber] = useState(idx);
    console.log(number);
    const showAnswer = () =>{
        setAnswer(true);
    }
    const demo = (event) =>{
        console.log(event.target.value)
        setNumber(number + 1);
        const choosenAnswer = event.target.value;
        if(choosenAnswer === correctAnswer){
            toast('Correct answer');
        }
        else{
            toast('your answer is wrong');
        }
    }

   
    
    const {options, question, correctAnswer} = quiz;
    return (
        <div className='bg-orange-300 m-6 p-6 rounded-md'>
            <div className='flex justify-between'>
            <p>Quiz:{idx + 1} </p>
            <p>{question}</p>
            <EyeIcon onClick={showAnswer} className="h-6 w-6  text-blue-500"/>
            </div>
            {/* <div>
                <button onClick={demo}>click me</button>
            </div> */}
            
            <div className='bg-red-500 my-3 rounded-md'>
                {
                    answer && <h4>Correct Answer : {correctAnswer}</h4>
                }
            </div>

            <div className='text-start ' >
                {
                    options.map((option, idx) => <div key={idx}>
                        <input onChange={demo} type='radio' id={option} name='javascript' value={option}></input>
               <label for={option} className='ml-2 hover:bg-amber-700 w-full rounded'>{option}</label><br></br>
                    </div>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizDetails;