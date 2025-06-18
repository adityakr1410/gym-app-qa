package com.energyx.utils.ui;

import org.testng.ITestContext;
import org.testng.ITestResult;

public class ParameterReader {

    public static String getParameter(ITestContext context,String name){
        return context.getCurrentXmlTest().getParameter(name);
    }

    public static String getParameter(ITestResult result,String name){
        return getParameter(result.getTestContext(),name);
    }
}
