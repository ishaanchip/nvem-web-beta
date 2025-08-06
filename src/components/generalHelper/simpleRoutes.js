import axios from 'axios'



//ACCOUNT ROUTES
    //getting account data
    export const fetchNvemAccount = async(email, dataField) =>{
        try{
            const result = await axios.get(`${import.meta.env.VITE_API_URL}account/get-nvem-account/${email}`)
            /*
            POSSIBLE DATA FIELDS
                email
                first_name
                course_history
                last_name
            */
            return result.data.result[dataField]
    
        }
        catch(err){
            console.log(`there was frontend error getting account info: ${err}`)
        }
    }

    //updating account profile data
    export const updateNvemAccount = async(email, updateData) =>{
        try{
            let postData = {email: email, ...updateData}
            const result = await axios.put(`${import.meta.env.VITE_API_URL}account/update-nvem-account`, postData)
            if (result.data.success === true){
                console.log('updating account data was a success!');
                return result.data;
            }
            else{
                console.log('updating account data was NOT a success...');
                return null;
            }
        }
        catch(err){
            console.log(`there was an error updating account data in frontend: ${err}`)
            return null;
        }
    }



//COURSE ROUTES

    //getting course data
    export const fetchNvemCourse = async(course_name, dataField) =>{
        try{
            const result = await axios.get(`${import.meta.env.VITE_API_URL}course/get-nvem-course/${course_name}`)
            /*
            POSSIBLE DATA FIELDS
                course_name
                content
                waitlist
            */
            return result.data.result[dataField]
    
        }
        catch(err){
            console.log(`there was frontend error getting account info: ${err}`)
        }
    }