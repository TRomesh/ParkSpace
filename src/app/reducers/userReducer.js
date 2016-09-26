export default function courseReducer(state = [],action){
    switch(action.type){
       //create a course or update it , else value is
       //undefined and your map would throw error.
       case 'CREATE_COURSES':
          return Object.assign({},state,{
             courses : action.course //need to update course
         })
         default:
          return state;
      }
}
