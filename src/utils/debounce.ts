export function debounce (this: any, func: Function, wait: number, immediate: boolean) {
    var timeout: number;
    return function(this: any){
        var context: any = this;
        var args: IArguments = arguments;

        var later: Function = function() {
            timeout = 0;
            if(!immediate) func.apply(context, args);
        };

        var callNow: boolean = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};