import { inject, Injectable } from "@angular/core";
import { CanActivateFn,Router } from "@angular/router";

export const authGuard: CanActivateFn=(route,state)=>{
    const router =inject(Router)
    if(typeof window!=='undefined'){
        const isAuthenticated = !!localStorage.getItem('access');
        if(!isAuthenticated){
            router.navigate(['/login'])
            return false
        }
        return true
    }
    return false
}