import {Action} from '@ngrx/store';

let initialState =
  {
    user : '',
  }

export function userRducer (state = initialState ,action : Action)
{


  let initialStatea =
    {
      user : action.type,
    }

return initialStatea;
}
