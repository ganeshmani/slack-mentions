import React,{ useState } from 'react'
import { MentionsInput, Mention } from 'react-mentions'
import DatePicker from 'react-datepicker';
import './mention-style.css'
import { Date } from 'sugar';
import getTaskName from './getTaskName';
function MentionComponent() {

    const [state,setState] = useState({
        value : "",
        mentionData : null,
        startDate : null
    });

    const style = {
        control: {
            backgroundColor: '#fff',
        
            fontSize: 14,
            fontWeight: 'normal',
          },
        
          highlighter: {
            overflow: 'hidden',
          },
        
          input: {
            margin: 0,
          },
        
          '&singleLine': {
            control: {
              display: 'inline-block',
        
              width: 130,
            },
        
            highlighter: {
              padding: 1,
              border: '2px inset transparent',
            },
        
            input: {
              padding: 1,
        
              border: '2px inset',
            },
          },
        
          '&multiLine': {
            control: {
              fontFamily: 'monospace',
              border: '1px solid silver',
            },
        
            highlighter: {
              padding: 9,
            },
        
            input: {
              padding: 9,
              minHeight: 63,
              outline: 0,
              border: 0,
            },
          },
        
          suggestions: {
            list: {
              backgroundColor: 'white',
              border: '1px solid rgba(0,0,0,0.15)',
              fontSize: 14,
            },
        
            item: {
              padding: '5px 15px',
              borderBottom: '1px solid rgba(0,0,0,0.15)',
        
              '&focused': {
                backgroundColor: '#cee4e5',
              },
            },
          },
    }

    const users = [
        {
          id: 'walter',
          display: 'Walter White',
        },
        {
          id: 'ergh54dffjdkfj',
          display: 'Jesse Pinkman',
        },
        {
          id: 'gus',
          display: 'Gustavo "Gus" Fring',
        },
        {
          id: 'saul',
          display: 'Saul Goodman',
        },
        {
          id: 'hank',
          display: 'Hank Schrader',
        },
        {
          id: 'skyler',
          display: 'Skyler White',
        },
        {
          id: 'mike',
          display: 'Mike Ehrmantraut',
        },
        {
          id: 'lydia',
          display: 'Lydìã Rôdarté-Qüayle'
        }
      ]

      let priority = [
        {
          id : "1234",
          display : "High"
        },
        {
          id : "12345",
          display : "medium"
        },
        {
          id : "12346",
          display : "low"
        },
      ]

    const onChange = (e,newValue,newPlainTextValue,mentions) => {
        // e.preventDefault();
        setState({ value : newValue , mentionData : { newValue, newPlainTextValue, mentions} })    
        console.log("event",e);
        console.log("newValue",newValue);
        console.log("newPlanTextValue",newPlainTextValue);
        console.log("mentions",mentions);

        if(newValue.includes("~")){

            let values = newValue.match('[^~]+$');
            if(values){
                let dateValue = Date.create(values[0]);
                if(dateValue !== "Invalid Date"){
                  console.log("Check ");
                  console.log(dateValue);
                }  
                
            }
           
        }
    } 
    
    const onAdd = (id,display) => {
        console.log("id",id);
    }

    const onPrioirtyAdd = (id,display) => {
      console.log("prioirty id",id);
    }

    const handleDateChange = date => {
        setState({...state, startDate : date})
    }

    const onSubmit = e => {
      console.log(e.keyCode);
        if(e.key === 'Enter'){
          e.preventDefault();
      
        
          let val = getTaskName(state.value);
  
          console.log("output => ",val);
        }
    }

    return (
        <div>
           <MentionsInput 
           value = {state.value}
           onChange={onChange}
           allowSuggestionsAboveCursor={true}
           allowSpaceInQuery={true}
           onKeyUp={ onSubmit }
        //    style={style}
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%'
          }}
           markup="@{{__type__||__id__||__display__}}"
           className="mentions" 
           >
               <Mention
               type="user"
               trigger="@"
               data={users}
               onAdd={onAdd}
               className="mentions__mention"
               />

               <Mention 
               trigger="!"
               data={priority}
               onAdd={onPrioirtyAdd}
               className="mentions__mention"
               />
               {/* <DatePicker
                selected={state.startDate}
                onChange={handleDateChange}
                setOpen={ true }
                /> */}
               </MentionsInput>     
        </div>
    )
}

export default MentionComponent
