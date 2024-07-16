
import { useState } from 'react';
import './App.css';

function App() {

  // state for store princicpal amount 
  const [loanAmount,setLoanAmount] = useState("");
  
  // state for store intrest 
  const [intrestRate,setIntrestRate] = useState("");
  
  // state for no of months
  const [loanTerm,setLoanTerm] = useState("");

 

  // emi wali state 
  const [emi,setEmi] = useState(null);
  const [totalIntrest,setTotalIntrest] = useState(null);

  const [totalPayment,setTotalPayment] = useState(null);

  const emiHandler = () =>{
     
    // rate pta krna 
     const rate = intrestRate/12/100;

    //  calculate kr rhe months 
     const duration = loanTerm*12;

     let x = Math.pow(rate+1,duration);

     //validation 
      if(loanAmount > 0 || intrestRate > 0 || loanTerm >0){

      const emiValue = (loanAmount*rate*x)/(x-1);
      const totalPaymentValue = emiValue*duration;
      const totalIntrestValue = totalPaymentValue-loanAmount;

     
      setEmi(emiValue.toFixed(2))
      setTotalPayment(totalPaymentValue.toFixed(2));
      setTotalIntrest(totalIntrestValue.toFixed(2));
    }

    else {
      setEmi("0");
      setLoanAmount("0");
      setTotalIntrest("0");
      setTotalPayment("0");
    }

     
     
  }

  // submit handler hai 
  const submitHandler = (e) => {

    // default behaviour ko stop ya prevent krne k lie 

    e.preventDefault();

    // isme sare value daltye 

    const emiCalculated = emiHandler(Number(loanAmount),Number(loanTerm),Number(intrestRate))

    setEmi(emiCalculated)
  } 


  return (
    <div className="App background h-[100vh]">

  <div>
     {/* main div  */}
     <h1 className='mt-4 font-bold text-2xl text-green-500 '>EMI Calculator</h1>
      <div className=" flex  w-full mt-4 mx-auto">
          {/* left side wala parameter */}
          <div className="flex flex-col w-[40%] mx-auto">
          <div className="border-orange-950 border-[1px] p-6">
            <h1 className="font-bold mb-2"> Loan Parameter</h1>
          <form onSubmit={submitHandler}>
              {/* loan amount wala  */}
            <label htmlFor='loanAmount'>Loan Amount</label>
            <input type='number'
             id='loanAmount'
             placeholder='Enter Amount in Rupees '
             onChange={(e)=>setLoanAmount(e.target.value)}
             name="loanAmount"
             className="outline ml-6"
             value={loanAmount}  />

             <br/>
             <br/>

             {/* intrest rate  */}
             <label htmlFor='intrestRate'>Intrest Rate</label>
             <input type='number'
             id='intrestRate'
             placeholder='Write Intrest in %'
             name="intrestRate"
             className="outline ml-6"
             value={intrestRate}
             onChange={(e)=>setIntrestRate(e.target.value)}
             />

             <br/>
             <br/>

             {/* loan term  */}
             <label htmlFor='loanTerm'>Loan Term 
              
             </label>
             <input type='number'
             id='loanTerm'
             placeholder='Enter No of Years'
             name="loanTerm"
             className="outline ml-6" 
             onChange={(e)=>setLoanTerm(e.target.value)}
             value={loanTerm} />

              <br/>
             <br/>

             {/* emi date wala  */}
             <label htmlFor='emiDate'>EMI Date 
              
             </label>
             <input type='date'
             id='emiDate'
             name="emiDate"
             className="outline ml-6"  />

             

          </form>

          {/* calculate wali btn  */}
          <button className='mt-4 border border-black px-5 py-2' onClick={emiHandler}>Calculate</button>
          </div>


          </div>

          {/* right wala repayment details  */}
          <div className="flex flex-col w-[40%] mx-auto border border-black  gap-y-4">

            {/* heading  */}
            <h1 className='bg-pink-200'>Repayment Details</h1>

           {/* loan amount equal wala  */}
           <div className="bg-blue-300">
             Loan Amount = <span>{loanAmount}</span>
           </div>

           {/* emi equal wala  */}
           <div className='bg-yellow-200'>
             EMI = <span>{emi}</span>
           </div>

           {/* total intrest  */}
           <div className="bg-blue-300">
            Total Intrest = <span>{totalIntrest}</span>
           </div>

           {/* total payment wala  */}
           <div className='bg-yellow-200'>
            Total Payment = <span>{totalPayment}</span>  
           </div>

          {/* months count div  */}
          <div className="bg-blue-200 ">
            Periods = <span> <span>{loanTerm*12}</span> Months</span>
          </div>



          </div>
      </div>
  </div>
    </div>
  );
}

export default App;
