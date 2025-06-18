package com.energyx.exceptions;

public class IncorrectPathException extends RuntimeException{
    public IncorrectPathException(){
        super("File Path is not correct");
    }
}
