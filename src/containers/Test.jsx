import React from 'react';
import AppButton from '../components/AppButton';
import AppLabel from '../components/AppLabel';

<<<<<<< HEAD

import Button from '@material-ui/core/Button';


=======
import TextField from '@material-ui/core/TextField';
>>>>>>> 71dc811e1b1f86ef0aae3e20b3a2d45f581b6e07

export default class Test extends React.Component {

    render(){
<<<<<<< HEAD
        return (
          <Button variant="contained"> +  Add Member </Button>  
          )
=======

        return(
            <div>
                <div>
                    <AppLabel/>
                </div>
               
                <div>
                    <TextField/>
                </div>
                <div>
                    <TextField/>
                </div>
                <div>
                    <AppButton/>
                </div>

            </div>
        )
>>>>>>> 71dc811e1b1f86ef0aae3e20b3a2d45f581b6e07
    }
}
