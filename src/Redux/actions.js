import { useDispatch } from "react-redux"

// action types
export const USERM="USER"
export const ORDERM = "ORDER"
export const isAuth = "isAuth"
export const Logged = "Logged"

// Action Creators

export function addUserM(val) { 
  return {type:USERM,payload:val}
}
export function addOrderM(val) { 
  return {type:ORDERM,payload:val}
}
export function toggleisAuth(val) { 
  return {type:isAuth,payload:val}
}
export function LoggedName(val) { 
  return {type:Logged,payload:val}
}
