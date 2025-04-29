
import './App.css';
import {useForm} from "react-hook-form"
;

function App() {


    const {
      register,
      handleSubmit,
      watch,
      formState: { errors ,isSubmitting},
     } = useForm();
   async function onSubmit(data){

    // api call ko simulate krte hai
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log("submitting the form.",data);

   }

  return ( 
    <>
<form onSubmit={handleSubmit(onSubmit)}>
  <div>
    <label >
      First Name:
    </label>
    <input
    className={errors.firstName?'input-error':""}
     {...register('firstName',
      {required:true,
      minLength:{value:3,message:'Min Length atleast 3'},
      maxLength:{value:10,message:'Max length less than or equal to 10'}})}/>


      {errors.firstName&&<p className="message-error">{errors.firstName.message}</p>}
    {/* //we have to link this input field with form state   so that react can track the data*/}
  </div>
<br />
<div>
  <label >Middle Name:</label>
  <input{...register('middleName')}/>
</div>

<br />

<div>
  <label>Last Name:</label>
  <input className={errors.lastName?'input-error':"" }
  
  {...register('lastName',{
    pattern:
    {
      value: /^[A-Za-z]+$/i,
      message:"Last Name is not as per the rules."

    }
   
  })}/>
  {errors.lastName && <p className='message-error'>{errors.lastName.message}</p>}
</div>
<br />
<input type="submit" disabled={isSubmitting}
 value={isSubmitting? "Submitting" :"Submit"} />
</form>
    </>
  );
}

export default App;
