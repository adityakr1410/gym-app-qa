package com.energyx.exceptions;

public class IncorrectBrowserException extends RuntimeException {
    public IncorrectBrowserException(){
        super("Incorrect Browser Parameter is passed");
    }

    public IncorrectBrowserException(String msg){
        super(msg);
    }
}
