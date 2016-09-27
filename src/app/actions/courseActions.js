import * as types from '../constants/constants';

export function createCourse(course){
   return {type:'CREATE_COURSE',course};
}
