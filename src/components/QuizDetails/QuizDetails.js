import React from 'react';

const QuizDetails = ({quiz, idx}) => {
    console.log(quiz)
    const {options, question, correctAnswer } = quiz;
    return (
        <div className='bg-orange-300 m-6 p-6 rounded-md'>
            <p>Quiz:{idx + 1} <span>{question}</span></p>
            {/* <div className='text-start'>
                
               <input type='radio' id='react' name='javascript'></input>
               <span className='ml-2' for='react'>{options[0]}</span><br></br>
               <input type='radio'id='css' name='javascript'></input>
               <span className='ml-2' for='css'>{options[1]}</span><br></br>
               <input  type='radio' id='boot' name='javascript'></input>
               <span className='ml-2' for='boot'>{options[2]}</span><br></br>
               <input type='radio' id='router' name='javascript'></input>
               <span className='ml-2' for='router'>{options[3]}</span><br></br>

                
            </div> */}
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